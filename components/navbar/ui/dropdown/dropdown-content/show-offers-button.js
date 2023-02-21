import classes from "./show-offers-button.module.css";
import Ripples from "react-ripples";

export default function ShowOffersButton() {
  return (
    <Ripples className={classes.button_ripple}>
      <span className={`${classes.button_inner}`}>Show offers</span>
    </Ripples>
  );
}
