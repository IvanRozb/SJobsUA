const VACANCIES_ON_PAGE_AMOUNT = process.env.VACANCIES_ON_PAGE_AMOUNT ?? 50;
const LIMIT_FETCHING_REQUEST_IN_ONE_TIME =
  process.env.LIMIT_FETCHING_REQUEST_IN_ONE_TIME ?? 20;

export async function getAllVacancies(...keys) {
  const keywords = keys
    .flatMap((key) => key.split(","))
    .filter((key) => key !== "CSharp" && key !== "default")
    .map((key) => key.replace("CSharp", "C%23"));
  const total = await getTotalVacanciesForKeywords(keywords);
  const totalPages = Math.ceil(total / VACANCIES_ON_PAGE_AMOUNT);
  const promises = [];

  for (
    let i = 0;
    i < totalPages && i < LIMIT_FETCHING_REQUEST_IN_ONE_TIME;
    i++
  ) {
    promises.push(
      fetch(
        `https://api.rabota.ua/vacancy/search?page=${i}&count=${VACANCIES_ON_PAGE_AMOUNT}&keyWords=${keywords.join(
          ","
        )}`
      ).then((res) => res.json())
    );
  }

  let data;
  try {
    data = await Promise.all(promises);
  } catch (error) {
    throw new Error(`Error occurred by fetching data for ${keywords}!`);
  }

  const vacancies = [];
  for (const pageData of data) {
    const pageVacancies = pageData.documents || [];
    for (const vacancyData of pageVacancies) {
      if (!vacancyData) continue;
      const vacancy = {
        id: vacancyData.id,
        latitude: vacancyData.latitude,
        longitude: vacancyData.longitude,
        name: vacancyData.name,
        logo: vacancyData.logo,
        salary: vacancyData.salary,
        salaryFrom: vacancyData.salaryFrom,
        salaryTo: vacancyData.salaryTo,
        companyName: vacancyData.companyName,
      };
      vacancies.push(vacancy);
    }
  }

  return removeDuplicateVacanciesByCoordinates(
    removeDuplicateVacanciesById(vacancies),
    4
  );
}

async function getTotalVacanciesForKeywords(keywords) {
  return await fetch(
    `https://api.rabota.ua/vacancy/search?keyWords=${keywords.join(",")}`
  )
    .then((res) => res.json())
    .then((data) => data.total)
    .catch((error) => {
      throw new Error(error);
    });
}

function removeDuplicateVacanciesById(vacancies) {
  return Array.from(new Set(vacancies.map((vacancy) => vacancy.id))).map((id) =>
    vacancies.find((vacancy) => vacancy.id === id)
  );
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
