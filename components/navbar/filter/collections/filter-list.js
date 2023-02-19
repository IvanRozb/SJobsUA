import Filter from "@/components/navbar/filter/filter";
import classes from "./filter-list.module.css";
import { useRouter } from "next/router";

export default function FilterList(props) {
  const { filters } = props;
  const router = useRouter();
  const { filter } = router.query;

  return (
    <div className={classes.filters}>
      {filters.map((currentFilter) => (
        <Filter
          key={encodeURIComponent(currentFilter)}
          name={currentFilter}
          isActive={currentFilter.replace(".", "") === filter}
        />
      ))}
    </div>
  );
}
