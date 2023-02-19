import classes from "./sidebar.module.css";
import FilterList from "@/components/sidebar/filter/collections/filter-list";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <FilterList
        filters={[
          "default",
          "JS",
          "php",
          "ruby",
          "python",
          "java",
          "pm",
          "CSharp",
          ".NET",
        ]}
      />
    </div>
  );
}
