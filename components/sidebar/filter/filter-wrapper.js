import Image from "next/image";
import classes from "./filter-wrapper.module.css";
import { useContext } from "react";
import { IndexContext } from "@/pages";

export default function FilterWrapper(props) {
  const { name, setVacancies } = props;
  const { setIconName, setIsLoading } = useContext(IndexContext);
  const path = `/images/filters/${name}.svg`;

  return (
    <button
      className={classes.filter}
      onClick={async () => {
        setIsLoading(true);
        const vacancies = await fetch(`/api/filters/language-filter/${name}`)
          .then((res) => res.json())
          .then((data) => data.vacancies);

        setVacancies([...vacancies]);
        setIconName(name);
        setIsLoading(false);
      }}
    >
      <div className={classes.filter_image}>
        <Image width={50} height={50} src={path} alt={name} />
      </div>
    </button>
  );
}
