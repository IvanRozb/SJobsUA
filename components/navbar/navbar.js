import classes from "./navbar.module.css";
import FilterList from "@/components/navbar/filter/collections/filter-list";
import LocationFilter from "@/components/navbar/location-filter/location-filter";

export default function Navbar({ cities }) {
  return (
    <div className={classes.navbar}>
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
      <LocationFilter cities={cities} />
    </div>
  );
}
