import classes from "@/components/navbar/location-filter/collections/location-list.module.css";
import LocationItem from "@/components/navbar/location-filter/collections/location-item";
import { useRouter } from "next/router";

export default function LocationList({ cities, filter }) {
  let { cityId: currentCityId } = useRouter().query;
  currentCityId = +currentCityId;

  return (
    <div className={classes.locations}>
      {cities?.map((city) => (
        <LocationItem
          name={city.name}
          key={city.id}
          filter={filter}
          id={city.id}
          isActive={currentCityId === city.id}
        />
      ))}
    </div>
  );
}
