import classes from "./navbar.module.css";
import FilterList from "@/components/navbar/filter/collections/filter-list";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
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
