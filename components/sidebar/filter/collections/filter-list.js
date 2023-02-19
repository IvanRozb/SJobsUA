import FilterWrapper from "@/components/sidebar/filter/filter-wrapper";
import classes from "./filter-list.module.css";

export default function FilterList(props) {
  const { filters } = props;

  return (
    <div className={classes.filters}>
      {filters.map((filter) => (
        <FilterWrapper key={encodeURIComponent(filter)} name={filter} />
      ))}
    </div>
  );
}
