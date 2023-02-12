import { Popup } from "react-map-gl";
import ClickAwayListener from "react-click-away-listener";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@/components/map/render-map";
import classes from "./map-popup.module.css";

export default function MapPopup() {
  const { selectedMarker, setSelectedMarker } = useContext(Context);

  return selectedMarker ? (
    <Popup
      latitude={selectedMarker.latitude}
      longitude={selectedMarker.longitude}
      closeButton={false}
      closeOnClick={false}
      onClose={() => setSelectedMarker(null)}
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
            setSelectedMarker(null);
        }}
      >
        <div className={classes.popup}>
          <div className={classes.image}>
            <Image
              src={"/images/company_image.png"}
              alt={"title"}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{"profession"}</h3>
            <p>{"salary"}</p>
            <h3>{"company"}</h3>
          </div>
        </div>
      </ClickAwayListener>
    </Popup>
  ) : null;
}
