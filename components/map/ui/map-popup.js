import ClickAwayListener from "react-click-away-listener";
import { Popup } from "react-map-gl";

import classes from "./map-popup.module.css";
import Image from "next/image";

export default function MapPopup(props) {
  const { selectedMarker, setSelectedMarker } = props;
  const formattedDate = new Date("2020-10-10").toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(formattedDate);

  return (
    <Popup
      latitude={selectedMarker.latitude}
      longitude={selectedMarker.longitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => setSelectedMarker(null)}
    >
      <ClickAwayListener onClickAway={() => setSelectedMarker(null)}>
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
            <h3>{"title"}</h3>
            <time>{formattedDate}</time>
            <br />
            <a
              href={
                "https://jobs.dou.ua/companies/samsung/vacancies/172124/?from=list_hot"
              }
            >
              dou.com.ua
            </a>
          </div>
        </div>
      </ClickAwayListener>
    </Popup>
  );
}
