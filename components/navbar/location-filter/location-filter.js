import classes from "./location-filter.module.css";
import { useState } from "react";
import Dropdown from "@/components/navbar/ui/dropdown";
import Content from "@/components/navbar/location-filter/dropdown-content/content";
import { useRouter } from "next/router";
import Overlay from "@/components/navbar/ui/overlay";

export default function LocationFilter({ cities, filter }) {
  const [isExpanded, setExpanded] = useState(false);
  const { cityName: currentCity } = useRouter().query;

  return (
    <div>
      {isExpanded && <Overlay setExpanded={setExpanded} />}
      <div className={classes.location_dropdown}>
        <Dropdown
          setExpanded={setExpanded}
          isExpanded={isExpanded}
          defaultTitle={"Region"}
          currentItem={currentCity}
        />
        <Content
          setExpanded={setExpanded}
          isExpanded={isExpanded}
          cities={cities}
          filter={filter}
        />
      </div>
    </div>
  );
}
