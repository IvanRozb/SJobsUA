import Sidebar from "@/components/sidebar/sidebar";
import MapWrapper from "@/components/map/map-wrapper";
import { createContext, Fragment, useEffect, useState } from "react";
import Head from "next/head";
import classes from "@/styles/Home.module.css";
import { getAllVacancies } from "@/helper/api";

export const IndexContext = createContext({
  iconName: "",
  setIconName: undefined,
  isLoading: undefined,
  setIsLoading: undefined,
});

export default function Home(props) {
  const [vacancies, setVacancies] = useState(props.vacancies);
  const [iconName, setIconName] = useState("default");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <IndexContext.Provider
      value={{ iconName, setIconName, isLoading, setIsLoading }}
    >
      <Fragment>
        <Head>
          <title>SJobsUA</title>
        </Head>
        <div className={classes.app}>
          <MapWrapper vacancies={vacancies} />
          <Sidebar setVacancies={setVacancies} />
        </div>
      </Fragment>
    </IndexContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      vacancies: await getAllVacancies(),
    },
    revalidate: process.env.FETCHING_VACANCIES_DAYS * 24 * 60 * 60, // one time per FETCHING_VACANCIES_DAYS days
  };
}
