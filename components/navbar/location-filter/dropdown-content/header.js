import classes from "@/components/navbar/location-filter/dropdown-content/header.module.css";
import Ripples from "react-ripples";

export default function Header({ setExpanded, isExpanded }) {
  return (
    <div className={classes.location_dropdown_header}>
      <h4 className={classes.location_dropdown_content_title}>Region</h4>
      <button
        className={classes.location_dropdown_close_btn}
        tabIndex="0"
        type="button"
        aria-label="close"
      >
        <Ripples
          className={classes.location_dropdown_close_btn_ripple}
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!isExpanded);
          }}
        >
          <span className={classes.location_dropdown_close_btn_label}>
            <svg
              className={classes.location_dropdown_close_btn_root}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
          </span>
        </Ripples>
      </button>
    </div>
  );
}
