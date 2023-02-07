import { Marker } from "react-map-gl";
import classes from "@/components/map/ui/map-marker.module.css";
import MapPin from "@/components/map/ui/map-pin";

export default function MapMarker(props) {
  const { ...geoProps } = props;

  return (
    <Marker {...geoProps}>
      <button className={classes.map_marker_button}>
        <MapPin />
      </button>
    </Marker>
  );
}
