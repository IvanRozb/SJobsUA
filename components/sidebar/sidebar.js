import classes from "./sidebar.module.css";
import FilterList from "@/components/collections/filter-list";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <FilterList
        filters={["default", "JS", "php", "ruby", "CSharp", "python", "java"]}
      />
    </div>
  );
}
