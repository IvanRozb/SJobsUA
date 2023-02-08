import Sidebar from "@/components/sidebar/sidebar";
import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";
import classes from "@/styles/Home.module.css";

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

export async function getServerSideProps(context) {
  if (context.req.method === "GET") {
    // fetch vacancies from the server
    const data = [
      { id: 0, latitude: 48, longitude: 30, isActive: false, index: 0 },
      { id: 1, latitude: 47, longitude: 30, isActive: false, index: 1 },
    ];

    return {
      props: {
        vacancies: data,
      },
    };
  }

  return {
    props: {},
  };
}
