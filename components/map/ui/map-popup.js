import { Popup } from "react-map-gl";
import ClickAwayListener from "react-click-away-listener";
import MapPopupList from "@/components/collections/map-popup-list";
import { forwardRef } from "react";

const ForwardedClickAwayListener = forwardRef((props, ref) => (
  <ClickAwayListener ref={ref} {...props} />
));

export default function MapPopup(props) {
  const { setShowVacancies, markers } = props;
  const { vacancies, location } = markers;
  const { longitude, latitude } = location;

  return (
    <Popup
      latitude={latitude}
      longitude={longitude}
      closeButton={false}
      closeOnClick={false}
    >
      <ForwardedClickAwayListener
        onClickAway={(event) => {
          // close the popup if user clicked on the map('CANVAS')
          // or in the cluster on the map(it has 'point' class in the classList)
          if (
            event.target.tagName === "CANVAS" ||
            (event.target.tagName === "IMG" &&
              event.target.parentNode.classList.contains("point"))
          )
            setShowVacancies(false);
        }}
      >
        <MapPopupList vacancies={vacancies} />
      </ForwardedClickAwayListener>
    </Popup>
  );
}
