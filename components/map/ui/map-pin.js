import classes from "./map-pin.module.css";
import { Marker } from "react-map-gl";
import { useContext } from "react";
import { Context } from "@/components/map/render-map";

export default function MapPin(props) {
  const { longitude, latitude } = props.marker;
  const { setSelectedMarker } = useContext(Context);

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      onClick={() => {
        setSelectedMarker(props.marker);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        stroke="currentColor"
        strokeWidth="1.5"
        className={classes.map_pin}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    </Marker>
  );
}
