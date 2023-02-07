import RenderMap from "@/components/map/render-map";
import classes from "./map-wrapper.module.css";

export default function MapWrapper() {
  return (
    <div className={classes.map_wrapper}>
      <RenderMap />
    </div>
  );
}
