import classes from "./sidebar.module.css";
import FilterWrapper from "@/components/sidebar/filter/filter-wrapper";

export default function Sidebar(props) {
  const { setVacancies } = props;

  return (
    <div className={classes.sidebar}>
      <FilterWrapper name={"default"} setVacancies={setVacancies} />
      <FilterWrapper name={"CSharp"} setVacancies={setVacancies} />
      <FilterWrapper name={"JS"} setVacancies={setVacancies} />
    </div>
  );
}
