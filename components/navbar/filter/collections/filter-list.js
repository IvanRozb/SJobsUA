import Filter from "@/components/navbar/filter/filter";
import classes from "./filter-list.module.css";
import { useRouter } from "next/router";

export default function FilterList(props) {
  const { filters } = props;
  const router = useRouter();
  const { filter } = router.query;
  const encodedFilter = encodeURIComponent(filter);

  return (
    <div className={classes.filters}>
      {filters.map((currentFilter) => {
        const encodedCurrentFilter = encodeURIComponent(currentFilter);

        return (
          <Filter
            key={encodedCurrentFilter}
            name={encodedCurrentFilter}
            isActive={
              encodedCurrentFilter === encodedFilter || encodedFilter === "All"
            }
          />
        );
      })}
    </div>
  );
}
