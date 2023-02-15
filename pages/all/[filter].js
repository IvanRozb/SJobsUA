import { getAllVacancies } from "@/helper/api";
import MapWrapper from "@/components/map/map-wrapper";

export default function FilterPage(props) {
  const { vacancies } = props;

  return <MapWrapper vacancies={vacancies} />;
}

export async function getStaticProps(context) {
  // console.log(124444444444444444444, context.params.filter);
  return {
    props: {
      vacancies: await getAllVacancies(context.params.filter),
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
