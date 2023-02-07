import RenderMap from "@/components/map/render-map";
import classes from "./map-wrapper.module.css";

export default function MapWrapper(props) {
  return (
    <div className={classes.map_wrapper}>
      <RenderMap vacancies={props.vacancies} />
    </div>
  );
}
