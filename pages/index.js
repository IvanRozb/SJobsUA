import Sidebar from "@/components/sidebar/sidebar";
import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";
import classes from "@/styles/Home.module.css";
import { getAllVacancies } from "@/helper/api";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>SJobsUA</title>
      </Head>
      <div className={classes.app}>
        <MapWrapper vacancies={props.vacancies} />
        <Sidebar />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      vacancies: await getAllVacancies(
        process.env.VACANCIES_ON_PAGE_AMOUNT,
        process.env.LIMIT_FETCHING_REQUEST_IN_ONE_TIME
      ),
    },
    revalidate: process.env.FETCHING_VACANCIES_DAYS * 24 * 60 * 60, // one time per FETCHING_VACANCIES_DAYS days
  };
}
