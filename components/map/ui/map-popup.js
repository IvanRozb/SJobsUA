import { Popup } from "react-map-gl";
import ClickAwayListener from "react-click-away-listener";
import MapPopupList from "@/components/collections/map-popup-list";

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
      <ClickAwayListener
        onClickAway={(event) => {
          if (
            !(
              event.target.tagName === "path" ||
              event.target.tagName === "svg" ||
              event.target.classList.contains("mapboxgl-marker")
            ) ||
            event.target.tagName === "CANVAS"
          )
            setShowVacancies(false);
        }}
      >
        <MapPopupList vacancies={vacancies} />
      </ClickAwayListener>
    </Popup>
  );
}
