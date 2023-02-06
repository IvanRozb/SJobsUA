import { Marker } from "react-map-gl";
import classes from "@/components/map/map-marker.module.css";
import MapPin from "@/components/map/map-pin";

export default function MapMarker(props) {
  return (
    <Marker {...props}>
      <button className={classes.map_marker_button}>
        <MapPin></MapPin>
      </button>
    </Marker>
  );
}
