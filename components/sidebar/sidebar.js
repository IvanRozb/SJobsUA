import classes from "./sidebar.module.css";
import Image from "next/image";

export default function Sidebar({vacancies}) {

    return <div className={classes.sidebar}>
        {vacancies?.map(vacancy => {
            const logo =
                vacancy.logo !== "defaultlogo.gif" && vacancy.logo.trim() !== ""
                    ? `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${vacancy.logo}`
                    : "/images/logo_default.svg";
            return <div key={vacancy.id} className={classes.vacancy}>
            <div className={classes.vacancy_introduction}>
                <div className={classes.vacancy_image}><Image src={logo} width={120} height={65} alt={'CompanyTitle'}></Image></div>
                <div className={classes.vacancy_inner}>
                    <h3 className={classes.vacancy_title}>{vacancy.name}</h3>
                    <div className={classes.vacancy_location}>
                        <p className={classes.vacancy_company_title}>{vacancy.companyName}</p>
                        <p>{vacancy.city.name}</p>
                    </div>
                </div>
            </div>
            <div className={classes.vacancy_info}>
                <p className={classes.vacancy_salary}>{`${vacancy.salary}$`}</p>
                <time>{vacancy.date}</time>
            </div>
        </div>})}
    </div>;
}
