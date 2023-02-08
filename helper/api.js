export async function getAllVacancies() {
  const vacanciesOnPageAmount = 59;
  let total = Math.ceil((await getVacanciesAmount()) / vacanciesOnPageAmount);
  let vacancies = [];
  let limit = 25;
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
        index: vacancies.length,
        latitude,
        longitude,
        isActive: false,
      });
    }
  });
  return vacancies;
}

export async function getVacanciesAmount() {
  return await fetch("https://api.rabota.ua/vacancy/count").then((res) =>
    res.json()
  );
}
