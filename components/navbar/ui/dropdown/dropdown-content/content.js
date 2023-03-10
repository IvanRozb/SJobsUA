import classes from "@/components/navbar/ui/dropdown/dropdown-content/content.module.css";
import { CSSTransition } from "react-transition-group";
import Header from "@/components/navbar/ui/dropdown/dropdown-content/header";
import ClearFilter from "@/components/navbar/ui/dropdown/dropdown-content/clear-filter";
import ShowOffersButton from "@/components/navbar/ui/dropdown/dropdown-content/show-offers-button";

export default function Content({
  isExpanded,
  setExpanded,
  filter,
  defaultTitle,
  children,
  parameters,
}) {
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
      <div
        className={`${classes.dropdown_content} ${
          defaultTitle === "Region" && classes["dropdown_content-region"]
        }`}
      >
        <div className={classes.dropdown_container}>
          <Header
            setExpanded={setExpanded}
            isExpanded={isExpanded}
            defaultTitle={defaultTitle}
          />
          {children}
          <hr className={classes.dropdown_line} />
          {defaultTitle === "Salary" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ClearFilter filter={filter} parameters={parameters} />
              <ShowOffersButton filter={filter} />
            </div>
          ) : (
            <ClearFilter filter={filter} parameters={parameters} />
          )}
        </div>
      </div>
    </CSSTransition>
  );
}
