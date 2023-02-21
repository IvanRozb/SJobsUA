import classes from "./navbar.module.css";
import FilterList from "@/components/navbar/filter/collections/filter-list";
import LocationFilter from "@/components/navbar/location-filter/location-filter";
import SalaryFilter from "@/components/navbar/salary-filter/salary-filter";

export default function Navbar({ cities, filter }) {
  return (
    <div className={classes.navbar}>
      <SalaryFilter filter={filter} />
      <FilterList
        filters={[
          "All",
          "JS",
          "PHP",
          "Ruby",
          "Python",
          "Java",
          "PM",
          "C#",
          ".Net",
        ]}
      />
      <LocationFilter cities={cities} filter={filter} />
    </div>
  );
}
