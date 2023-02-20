import classes from "@/components/navbar/location-filter/dropdown-content/content.module.css";
import { CSSTransition } from "react-transition-group";
import Header from "@/components/navbar/location-filter/dropdown-content/header";
import ClearFilter from "@/components/navbar/location-filter/dropdown-content/clear-filter";
import LocationList from "@/components/navbar/location-filter/collections/location-list";

export default function Content({ isExpanded, setExpanded, cities }) {
  return (
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
          <Header setExpanded={setExpanded} isExpanded={isExpanded} />
          <LocationList cities={cities} />
          <hr className={classes.location_dropdown_line} />
          <ClearFilter />
        </div>
      </div>
    </CSSTransition>
  );
}
