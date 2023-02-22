import Overlay from "@/components/navbar/ui/overlay";
import classes from "@/components/navbar/location-filter/location-filter.module.css";
import DropdownOption from "@/components/navbar/ui/dropdown/dropdown-option";
import Content from "@/components/navbar/ui/dropdown/dropdown-content/content";

export default function Dropdown({
  isExpanded,
  setExpanded,
  currentItem,
  defaultTitle,
  filter,
  children,
  parameters,
}) {
  return (
    <div>
      {isExpanded && <Overlay setExpanded={setExpanded} />}
      <div className={classes.location_dropdown}>
        <DropdownOption
          setExpanded={setExpanded}
          isExpanded={isExpanded}
          defaultTitle={defaultTitle}
          currentItem={currentItem}
        />
        <Content
          setExpanded={setExpanded}
          isExpanded={isExpanded}
          filter={filter}
          defaultTitle={defaultTitle}
          parameters={parameters}
        >
          {children}
        </Content>
      </div>
    </div>
  );
}
