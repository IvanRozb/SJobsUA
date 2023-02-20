import classes from "@/components/navbar/location-filter/collections/location-list.module.css";
import LocationItem from "@/components/navbar/location-filter/collections/location-item";

export default function LocationList({ cities }) {
  return (
    <div className={classes.locations}>
      {cities?.map((city) => (
        <LocationItem name={city.name} />
      ))}
    </div>
  );
}
