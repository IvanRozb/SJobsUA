import { useState } from "react";
import { useRouter } from "next/router";
import Dropdown from "@/components/navbar/ui/dropdown/dropdown";
import LocationList from "@/components/navbar/location-filter/collections/location-list";

export default function LocationFilter({ cities, filter }) {
  const [isExpanded, setExpanded] = useState(false);
  const { cityName: currentCity } = useRouter().query;

  return (
    <Dropdown
      filter={filter}
      setExpanded={setExpanded}
      isExpanded={isExpanded}
      currentItem={currentCity}
      defaultTitle={"Region"}
      parameters={["cityName", "cityId"]}
    >
      <LocationList cities={cities} filter={filter} />
    </Dropdown>
  );
}
