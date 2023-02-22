import classes from "./navbar.module.css";
import FilterList from "@/components/navbar/filter/collections/filter-list";
import LocationFilter from "@/components/navbar/location-filter/location-filter";
import SalaryFilter from "@/components/navbar/salary-filter/salary-filter";
import { createContext, useState } from "react";

export const NavbarContext = createContext({
  salary: [],
  setSalary: undefined,
});

export default function Navbar({ cities, filter }) {
  const [salary, setSalary] = useState([0, 100000]);

  return (
    <NavbarContext.Provider value={{ salary, setSalary }}>
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
    </NavbarContext.Provider>
  );
}
