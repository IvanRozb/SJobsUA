import RenderMap from "@/components/map/render-map";
import classes from "./map-wrapper.module.css";
import { useContext } from "react";
import { IndexContext } from "@/pages";
import Loader from "@/components/loader";

export default function MapWrapper(props) {
  const { vacancies } = props;
  const { isLoading } = useContext(IndexContext);

  return (
    <div className={classes.map_wrapper}>
      <RenderMap vacancies={vacancies} />
      {isLoading && <Loader />}
    </div>
  );
}
