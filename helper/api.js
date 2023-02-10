export async function getAllVacancies(vacanciesOnPageAmount, limit) {
  function removeDuplicateVacanciesById(vacancies) {
    let uniqueIds = new Set();
    let result = [];

    for (let vacancy of vacancies) {
      if (!uniqueIds.has(vacancy.id)) {
        uniqueIds.add(vacancy.id);
        result.push(vacancy);
      }
    }

    return result;
  }

  function removeDuplicateVacanciesByCoordinates(vacancies, precision) {
    let uniqueIds = new Set();
    let result = [];

    for (let vacancy of vacancies) {
      let key = `${vacancy.latitude.toFixed(
        precision
      )}|||${vacancy.longitude.toFixed(precision)}`;
      if (!uniqueIds.has(key)) {
        uniqueIds.add(key);
        result.push(vacancy);
      }
    }

    return result;
  }

  let total = Math.ceil((await getVacanciesAmount()) / vacanciesOnPageAmount);
  let vacancies = [];
  const fetchedVacancies = [];

  for (let i = 0; i < total && i < limit; i++) {
    fetchedVacancies.push(
      fetch(
        `https://api.rabota.ua/vacancy/search?page=${
          i + 1
        }&count=${vacanciesOnPageAmount}`
      ).then((res) => res.json())
    );
  }

  const data = await Promise.all(fetchedVacancies);
  data.forEach((pageData) => {
    const pageVacancies = pageData.documents;
    if (!pageVacancies || !pageVacancies.length) return;
    for (const vacancyData of pageVacancies) {
      if (!vacancyData) continue;

      const { latitude, longitude, id } = vacancyData;
      vacancies.push({
        id,
        latitude,
        longitude,
      });
    }
  });
  vacancies = removeDuplicateVacanciesById(vacancies);
  vacancies = removeDuplicateVacanciesByCoordinates(vacancies, 4);
  return vacancies;
}

export async function getVacanciesAmount() {
  return await fetch("https://api.rabota.ua/vacancy/count").then((res) =>
    res.json()
  );
}
