import Image from "next/image";
import classes from "./filter-wrapper.module.css";
import { useContext } from "react";
import { IndexContext } from "@/pages";

export default function FilterWrapper(props) {
  let { name } = props;
  name = name.replace(".", "");
  const { setIconName, setIsLoading, setVacancies } = useContext(IndexContext);
  let { currentFilter } = useContext(IndexContext);
  const path = `/images/filters/${name}.svg`;

  return (
    <button
      className={classes.filter}
      onClick={async () => {
        if (currentFilter === name) return;

        setIsLoading(true);
        let vacancies;
        try {
          vacancies = await fetch(`/api/filters/language-filter/${name}`)
            .then((res) => res.json())
            .then((data) => data.vacancies);
        } catch (error) {
          throw new Error(error);
        }

        setVacancies(vacancies);
        setIconName(name);
        setIsLoading(false);
        currentFilter = name;
      }}
    >
      <div className={classes.filter_image}>
        <Image width={50} height={50} src={path} alt={name} />
      </div>
      <p>{name}</p>
    </button>
  );
}
