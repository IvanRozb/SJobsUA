import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { getAllCities } from "@/helper/api";
import { translateAllCities } from "@/helper/translation";
import { useRouter } from "next/router";

export default function FilterPage(props) {
  const { filter, cities } = props;
  let { vacancies } = props;
  const encodedFilter = encodeURIComponent(filter);

  const router = useRouter();
  const cityId = Number(router.query.cityId);
  if (!isNaN(cityId))
    vacancies = vacancies?.filter((vacancy) => vacancy.city.id === cityId);

  return (
    <Fragment>
      <Head>
        <title>{`SJobs` + (filter !== "All" ? ` - ${filter}` : "")}</title>
        <meta
          name={"description"}
          content={`This is filter of ${filter} vacancies`}
        />
      </Head>
      <Navbar cities={cities} filter={filter} />
      <div className={"row"}>
        <Sidebar />
        <MapWrapper vacancies={vacancies} filterName={encodedFilter} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { filter } = context.params;

  let vacancies;
  let cities;

  try {
    const data = await fetch(
      `${
        process.env.DEFAULT_PORT
      }/api/filters/language-filter/${encodeURIComponent(filter).replace(
        "All",
        "Programmer"
      )}`
    ).then((res) => res.json());
    vacancies = data.vacancies;
    cities = await translateAllCities(
      await getAllCities(vacancies),
      "ru",
      "uk"
    );
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: {
      vacancies,
      filter,
      cities,
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
