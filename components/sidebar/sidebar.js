import classes from "./sidebar.module.css";
import FilterWrapper from "@/components/sidebar/filter/filter-wrapper";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <FilterWrapper name={"default"} />
      <FilterWrapper name={"JS"} />
      <FilterWrapper name={"php"} />
      <FilterWrapper name={"CSharp"} />
    </div>
  );
}
