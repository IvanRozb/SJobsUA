import MapWrapper from "@/components/map/map-wrapper";

export default function FilterPage(props) {
  const { vacancies, filter } = props;

  return <MapWrapper vacancies={vacancies} filterName={filter} />;
}

export async function getStaticProps(context) {
  const { filter } = context.params;
  const { vacancies } = await fetch(
    `${process.env.DEFAULT_PORT}/api/filters/language-filter/${filter}`
  ).then((res) => res.json());

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
