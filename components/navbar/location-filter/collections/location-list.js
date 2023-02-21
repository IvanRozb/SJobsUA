import classes from "@/components/navbar/location-filter/collections/location-list.module.css";
import LocationItem from "@/components/navbar/location-filter/collections/location-item";

export default function LocationList({ cities, filter }) {
  return (
    <div className={classes.locations}>
      {cities?.map((city) => (
        <LocationItem
          name={city.name}
          key={city.id}
          filter={filter}
          id={city.id}
        />
      ))}
    </div>
  );
}
