import classes from "./location-filter.module.css";
import { useState } from "react";
import Ripples from "react-ripples";
import { CSSTransition } from "react-transition-group";

export default function LocationFilter() {
  const [isExpanded, setExpanded] = useState(false);
  console.log(isExpanded);
  return (
    <div className={classes.location_dropdown}>
      <Ripples
        className={classes.location_dropbtn}
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        <span>
          <span>Region</span>
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
      <CSSTransition
        in={isExpanded}
        timeout={200}
        classNames={{
          enter: classes.fadeEnter,
          enterActive: classes.fadeEnterActive,
          exit: classes.fadeExit,
          exitActive: classes.fadeExitActive,
        }}
        unmountOnExit
      >
        <div className={classes.location_dropdown_content}>
          <div className={classes.location_dropdown_container}>
            <div className={classes.location_dropdown_header}>
              <h4 className={classes.location_dropdown_content_title}>
                Region
              </h4>
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
            <div className={classes.locations}>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
              <Ripples className={classes.location_ripple}>
                <span className={classes.location_item}>Kyiv</span>
              </Ripples>
            </div>
            <hr className={classes.location_dropdown_line} />
            <Ripples className={classes.location_ripple}>
              <div
                className={`${classes.location_item} ${classes.location_clear}`}
              >
                Clear filter
              </div>
            </Ripples>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
