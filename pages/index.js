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
      vacancies: await getAllVacancies(59, 5),
    },
    revalidate: 3 * 24 * 60 * 60, // one time per 3 days
  };
}
