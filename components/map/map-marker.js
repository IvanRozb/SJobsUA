import { Marker } from "react-map-gl";
import classes from "@/components/map/map-marker.module.css";
import MapPin from "@/components/map/map-pin";

export default function MapMarker(props) {
  const { onMouseEnter, onMouseLeave, cursor, ...geoProps } = props;

  return (
    <Marker {...geoProps}>
      <button
        className={classes.map_marker_button}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ cursor }}
      >
        <MapPin />
      </button>
    </Marker>
  );
}
