import classes from "./location-filter.module.css";
import { useState } from "react";
import Dropdown from "@/components/navbar/location-filter/dropdown";
import Content from "@/components/navbar/location-filter/dropdown-content/content";

export default function LocationFilter({ cities, filter }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={classes.location_dropdown}>
      <Dropdown setExpanded={setExpanded} isExpanded={isExpanded} />
      <Content
        setExpanded={setExpanded}
        isExpanded={isExpanded}
        cities={cities}
        filter={filter}
      />
    </div>
  );
}
