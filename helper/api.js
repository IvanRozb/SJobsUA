import { latitudeBoundaries, longitudeBoundaries } from "@/helper/constants";

const VACANCIES_ON_PAGE_AMOUNT = process.env.VACANCIES_ON_PAGE_AMOUNT ?? 50;
const LIMIT_FETCHING_REQUEST_IN_ONE_TIME =
  process.env.LIMIT_FETCHING_REQUEST_IN_ONE_TIME ?? 20;

export async function getAllVacancies(...keys) {
  const total = await getTotalVacanciesForKeywords(keys);
  const totalPages = Math.ceil(total / VACANCIES_ON_PAGE_AMOUNT);
  const promises = [];

  for (
    let i = 0;
    i < totalPages && i < LIMIT_FETCHING_REQUEST_IN_ONE_TIME;
    i++
  ) {
    promises.push(
      fetch(
        `https://api.rabota.ua/vacancy/search?page=${i}&count=${VACANCIES_ON_PAGE_AMOUNT}&keyWords=${keys.join(
          ","
        )}`
      ).then((res) => res.json())
    );
  }

  let data;
  try {
    data = await Promise.all(promises);
  } catch (error) {
    throw new Error(`Error occurred by fetching data for ${keys.toString()}!`);
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

  return removeDuplicateVacanciesById(removeUnBoundariesVacancies(vacancies));
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

function removeUnBoundariesVacancies(vacancies) {
  return vacancies.filter(
    (vacancy) =>
      !(
        vacancy.longitude < longitudeBoundaries[0] ||
        vacancy.longitude > longitudeBoundaries[1] ||
        vacancy.latitude < latitudeBoundaries[0] ||
        vacancy.latitude > latitudeBoundaries[1]
      )
  );
}
