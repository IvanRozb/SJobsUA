import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";

export default function FilterPage(props) {
  const { vacancies, filter } = props;

  return (
    <Fragment>
      <Head>
        <title>{`SJobs` + (filter !== "default" ? ` - ${filter}` : "")}</title>
        <meta
          name={"description"}
          content={`This is filter of ${filter} vacancies`}
        />
      </Head>
      <MapWrapper vacancies={vacancies} filterName={filter} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { filter } = context.params;
  let vacancies;
  try {
    const data = await fetch(
      `${process.env.DEFAULT_PORT}/api/filters/language-filter/${filter}`
    ).then((res) => res.json());
    vacancies = data.vacancies;
  } catch (error) {
    throw new Error(error);
  }
  return {
    props: {
      vacancies,
      filter,
    },
    revalidate: process.env.FETCHING_VACANCIES_DAYS * 24 * 60 * 60, // one time per FETCHING_VACANCIES_DAYS days
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
