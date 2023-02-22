export function filterVacanciesByCity(router, vacancies) {
  const { cityId } = router.query;
  return isNaN(cityId)
    ? vacancies
    : vacancies.filter((vacancy) => vacancy.city.id === +cityId);
}

export function filterVacanciesBySalary(router, vacancies) {
  const { salary } = router.query;
  if (!salary) return vacancies;

  const [minSalary, maxSalary] = splitSalary(salary);

  return vacancies.filter((vacancy) => {
    const salaryFrom = vacancy.salaryFrom;
    const salaryTo = vacancy.salaryTo;

    return (
      (salaryFrom >= minSalary && salaryFrom <= maxSalary) ||
      (salaryTo >= minSalary && salaryTo <= maxSalary)
    );
  });
}

export function splitSalary(salary) {
  return salary
    ?.replaceAll(" UAH", "")
    .split("-")
    .map((salary) => +salary);
}
