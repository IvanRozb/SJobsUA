import { Marker } from "react-map-gl";
import classes from "@/components/map/ui/marker/map-marker.module.css";
import MapPin from "@/components/map/ui/map-pin";
import { useContext } from "react";
import { Context } from "@/components/map/render-map";

export default function MapMarker(props) {
  const { index, ...geoProps } = props;

  let { markers, setMarkers } = useContext(Context);

  return (
    <Marker
      {...geoProps}
      onClick={() => {
        markers = markers.map((marker) => {
          marker.isActive = false;
          return marker;
        });
        markers[index].isActive = true;
        setMarkers([...markers]);
      }}
    >
      <button className={classes.map_marker_button}>
        <MapPin />
      </button>
    </Marker>
  );
}
