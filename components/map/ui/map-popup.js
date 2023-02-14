import { Popup } from "react-map-gl";
import ClickAwayListener from "react-click-away-listener";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@/components/map/render-map";
import classes from "./map-popup.module.css";

export default function MapPopup(props) {
  const { selectedLocation, setSelectedLocation } = useContext(Context);
  const { markerData: data, location } = props.marker;
  const { longitude, latitude } = location;
  const logo = `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${data.logo}`;
  const salary =
    data.salary || data.salaryFrom
      ? data.salaryTo
        ? `$${data.salaryFrom} - $${data.salaryTo}`
        : `$${data.salary || data.salaryFrom}`
      : data.salaryTo
      ? `$${data.salaryTo}`
      : `$(none mentioned)`;

  const refactorString = (str, length) =>
    str.length < length ? str : str.substring(0, length) + "...";

  const refactoredName = refactorString(data.name, 13);
  const refactoredCompanyName = refactorString(data.companyName, 13);

  return selectedLocation &&
    selectedLocation.longitude === longitude &&
    selectedLocation.latitude === latitude ? (
    <Popup
      latitude={latitude}
      longitude={longitude}
      closeButton={false}
      closeOnClick={false}
      onClose={() => setSelectedLocation(null)}
    >
      <ClickAwayListener
        onClickAway={(event) => {
          if (
            !(
              event.target.tagName === "path" ||
              event.target.tagName === "svg" ||
              event.target.classList.contains("mapboxgl-marker")
            )
          )
            setSelectedLocation(null);
        }}
      >
        <div className={classes.popup}>
          <div className={classes.image}>
            <Image
              src={logo}
              alt={data.name}
              width={300}
              height={(300 * 2) / 3}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={classes.content}>
            <h3>{refactoredName}</h3>
            <p>{salary}</p>
            <h3>{refactoredCompanyName}</h3>
          </div>
        </div>
      </ClickAwayListener>
    </Popup>
  ) : null;
}
