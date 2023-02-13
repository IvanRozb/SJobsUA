import MapPin from "@/components/map/ui/map-pin";
import MapPopup from "@/components/map/ui/map-popup";
import { Fragment } from "react";

// Wrapper for marker pin and popup
export default function MapSingleMarker(props) {
  const { marker, icon } = props;

  return (
    <Fragment>
      <MapPin marker={marker} icon={icon} />
      <MapPopup marker={marker} />
    </Fragment>
  );
}
