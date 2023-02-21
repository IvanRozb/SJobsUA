import Ripples from "react-ripples";
import classes from "@/components/navbar/ui/dropdown/dropdown_option.module.css";
import activeBrick from "@/components/navbar/ui/utilites.module.css";

export default function DropdownOption({
  setExpanded,
  isExpanded,
  defaultTitle,
  currentItem,
}) {
  return (
    <Ripples
      className={`${classes.location_dropbtn} ${
        currentItem ? activeBrick.active : ""
      }`}
      onClick={() => {
        setExpanded(!isExpanded);
      }}
    >
      <span>
        <span>{currentItem ? currentItem : defaultTitle}</span>
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
