export async function getAllVacancies(...keys) {
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

  keys = keys.length === 0 ? "" : keys;
  keys = keys.toString();
  keys = keys.replace("CSharp", "C%23");
  keys = keys.replace("default", "");

  const vacanciesOnPageAmount = process.env.VACANCIES_ON_PAGE_AMOUNT;
  const limit = process.env.LIMIT_FETCHING_REQUEST_IN_ONE_TIME;
  let total = Math.ceil(
    (await getAllVacanciesForSpecificKeyword(keys)) / vacanciesOnPageAmount
  );
  let vacancies = [];
  const fetchedVacancies = [];

  for (let i = 0; i <= total && i <= limit; i++) {
    fetchedVacancies.push(
      fetch(
        `https://api.rabota.ua/vacancy/search?page=${i}&count=${vacanciesOnPageAmount}&keyWords=${keys}`
      ).then((res) => res.json())
    );
  }

  const data = await Promise.all(fetchedVacancies);
  data.forEach((pageData) => {
    const pageVacancies = pageData.documents;
    if (!pageVacancies || !pageVacancies.length) return;
    for (const vacancyData of pageVacancies) {
      if (!vacancyData) continue;

      const {
        latitude,
        longitude,
        id,
        name,
        logo,
        salary,
        salaryFrom,
        salaryTo,
        companyName,
      } = vacancyData;

      vacancies.push({
        id,
        latitude,
        longitude,
        name,
        logo,
        salary,
        salaryFrom,
        salaryTo,
        companyName,
      });
    }
  });
  vacancies = removeDuplicateVacanciesById(vacancies);
  vacancies = removeDuplicateVacanciesByCoordinates(vacancies, 4);
  return vacancies;
}

export async function getAllVacanciesForSpecificKeyword(key) {
  return (
    await fetch(`https://api.rabota.ua/vacancy/search?keyWords=${key}`).then(
      (res) => res.json()
    )
  ).total;
}
