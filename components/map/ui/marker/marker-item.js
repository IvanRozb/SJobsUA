import { Fragment, useContext } from "react";
import MapMarker from "@/components/map/ui/marker/map-marker";
import MapPopup from "@/components/map/ui/map-popup";
import { Context } from "@/components/map/render-map";

export default function MarkerItem(props) {
  const { latitude, longitude, isActive, index } = props;
  const { markers } = useContext(Context);

  return (
    <Fragment>
      <MapMarker latitude={latitude} longitude={longitude} index={index} />
      {isActive && <MapPopup selectedMarker={markers[index]} />}
    </Fragment>
  );
}
