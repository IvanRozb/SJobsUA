import Ripples from "react-ripples";
import classes from "@/components/navbar/location-filter/dropdown.module.css";
import { useRouter } from "next/router";

export default function Dropdown({ setExpanded, isExpanded }) {
  const { cityName: currentCity } = useRouter().query;

  return (
    <Ripples
      className={`${classes.location_dropbtn} ${
        currentCity ? classes.active : ""
      }`}
      onClick={() => {
        setExpanded(!isExpanded);
      }}
    >
      <span>
        <span>{currentCity ? currentCity : "Region"}</span>
        <span className={classes.location_flicker_wrapper}>
          <svg
            className={`${classes.location_flicker} ${
              isExpanded ? classes.rotate180 : classes.reverse
            }`}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
              fill="#ffffff"
            ></path>
          </svg>
        </span>
      </span>
    </Ripples>
  );
}
