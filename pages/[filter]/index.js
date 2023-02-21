import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { getAllCities } from "@/helper/api";
import { translateAllCities } from "@/helper/translation";
import { useRouter } from "next/router";
import { NotFound } from "next/dist/client/components/error";

export default function FilterPage({ filter, cities, vacancies }) {
  const encodedFilter = encodeURIComponent(filter);
  const router = useRouter();
  const { cityId, cityName } = router.query;
  const filteredVacancies = isNaN(cityId)
    ? vacancies
    : vacancies?.filter((vacancy) => vacancy.city.id === +cityId);

  if ((!cityName && cityId) || (cityName && !cityId)) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <Head>
        <title>{`SJobs${filter !== "All" ? ` - ${filter}` : ""}`}</title>
        <meta
          name="description"
          content={`This is filter of ${filter} vacancies`}
        />
      </Head>
      <Navbar cities={cities} filter={filter} />
      <div className="row">
        <Sidebar />
        <MapWrapper vacancies={filteredVacancies} filterName={encodedFilter} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { filter } = params;

  try {
    const res = await fetch(
      `${
        process.env.DEFAULT_PORT
      }/api/filters/language-filter/${encodeURIComponent(filter).replace(
        "All",
        "Programmer"
      )}`
    );
    const { vacancies } = await res.json();
    const cities = await translateAllCities(
      await getAllCities(vacancies),
      "ru",
      "en"
    );
    return {
      props: {
        vacancies,
        filter,
        cities,
      },
      revalidate: process.env.FETCHING_VACANCIES_DAYS * 24 * 60 * 60, // one time per FETCHING_VACANCIES_DAYS days
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
