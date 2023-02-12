import MapPin from "@/components/map/ui/map-pin";
import MapPopup from "@/components/map/ui/map-popup";
import { Fragment } from "react";

// Wrapper for marker pin and popup
export default function MapSingleMarker(props) {
  const { marker } = props;

  return (
    <Fragment>
      <MapPin marker={marker} />
      <MapPopup marker={marker} />
    </Fragment>
  );
}
