import Map from "@/components/map/map";
import classes from "./map-wrapper.module.css";

export default function MapWrapper() {
  return (
    <div className={classes.map_wrapper}>
      <Map />
    </div>
  );
}
