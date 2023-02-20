import classesClear from "@/components/navbar/location-filter/dropdown-content/clear-filter.module.css";
import classesItem from "@/components/navbar/location-filter/collections/location-item.module.css";
import Ripples from "react-ripples";

export default function ClearFilter() {
  return (
    <Ripples className={classesItem.location_ripple}>
      <div
        className={`${classesItem.location_item} ${classesClear.location_clear}`}
      >
        Clear filter
      </div>
    </Ripples>
  );
}
