import Ripples from "react-ripples";
import classes from "@/components/navbar/location-filter/collections/location-item.module.css";

export default function LocationItem({ name }) {
  return (
    <Ripples className={classes.location_ripple}>
      <span className={classes.location_item}>{name}</span>
    </Ripples>
  );
}
