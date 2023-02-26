import classes from "./sidebar.module.css";
import Image from "next/image";

export default function Sidebar({vacancies}) {
    // console.log(vacancies[0])
    return <div className={classes.sidebar}>
        {vacancies?.map(vacancy => <div key={vacancy.id} className={classes.vacancy}>
            <div className={classes.vacancy_introduction}>
                <div className={classes.vacancy_image}><Image src={'https://via.placeholder.com/120x65'} width={120} height={65} alt={'CompanyTitle'}></Image></div>
                <div className={classes.vacancy_inner}>
                    <h3 className={classes.vacancy_title}>Title_Job</h3>
                    <div className={classes.vacancy_location}>
                        <p className={classes.vacancy_company_title}>Company_title</p>
                        <p>Region</p>
                    </div>
                </div>
            </div>
            <div className={classes.vacancy_info}>
                <p className={classes.vacancy_salary}>Salary</p>
                <time>Date_Time</time>
            </div>
        </div>)}
    </div>;
}
