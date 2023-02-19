import Filter from "@/components/navbar/filter/filter";
import classes from "./filter-list.module.css";

export default function FilterList(props) {
  const { filters } = props;

  return (
    <div className={classes.filters}>
      {filters.map((filter) => (
        <Filter key={encodeURIComponent(filter)} name={filter} />
      ))}
    </div>
  );
}
