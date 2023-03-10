import classes from "@/components/map/collections/map-vacancies-list.module.css";
import Image from "next/image";

export default function MapVacanciesList(props) {
  const { vacancies } = props;
  const refactorString = (str, length) =>
    str.length < length ? str : str.substring(0, length) + "...";

  return (
    <div className={classes.popup_wrapper}>
      <div className={classes.popup}>
        {vacancies?.map((vacancy) => {
          // set logo
          const logo =
            vacancy.logo !== "defaultlogo.gif" && vacancy.logo.trim() !== ""
              ? `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${vacancy.logo}`
              : "/images/logo_default.svg";

          // set name and company name
          const refactoredName = refactorString(vacancy.name, 13);
          const refactoredCompanyName = refactorString(vacancy.companyName, 13);

          // set salary
          const salary = vacancy.salary
            ? `₴${vacancy.salary}`
            : vacancy.salaryFrom && vacancy.salaryTo
            ? `₴${vacancy.salaryFrom} - ₴${vacancy.salaryTo}`
            : vacancy.salaryFrom
            ? `min: ₴${vacancy.salaryFrom}`
            : vacancy.salaryTo
            ? `max: ₴${vacancy.salaryTo}`
            : "";

          return (
            <div key={vacancy.id} className={classes.popup_item}>
              <div className={classes.image}>
                <Image
                  src={logo}
                  alt={vacancy.name}
                  width={300}
                  height={(300 * 2) / 3}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={classes.content}>
                <h3>{refactoredName}</h3>
                <p>{salary}</p>
                <h3>{refactoredCompanyName}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
