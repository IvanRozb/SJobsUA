import classes from "./sidebar.module.css";
import Image from "next/image";

export default function Sidebar({vacancies}) {
    // console.log(vacancies[0])
    return <div className={classes.sidebar}>
        {vacancies?.map(vacancy => <div key={vacancy.id} className={classes.vacancy}>
            <div className={classes.vacancy_introduction}>
                <div><Image src={'https://via.placeholder.com/140x80'} width={140} height={80} alt={'CompanyTitle'}></Image></div>
                <div>
                    <h3>Title_Job</h3>
                    <div className={classes.vacancy_location}>
                        <p>Company_title</p>
                        <p>Region</p>
                    </div>
                </div>
            </div>
            <div className={classes.vacancy_info}>
                <p>Salary</p>
                <time>Date_Time</time>
            </div>
        </div>)}
    </div>;
}
