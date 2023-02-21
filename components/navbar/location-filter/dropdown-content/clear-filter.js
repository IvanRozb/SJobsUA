import classesClear from "@/components/navbar/location-filter/dropdown-content/clear-filter.module.css";
import classesItem from "@/components/navbar/location-filter/collections/location-item.module.css";
import Ripples from "react-ripples";
import Link from "next/link";

export default function ClearFilter({ filter }) {
  return (
    <Link href={{ pathname: `/${filter}` }}>
      <Ripples className={classesItem.location_ripple}>
        <div
          className={`${classesItem.location_item} ${classesClear.location_clear}`}
        >
          Clear filter
        </div>
      </Ripples>
    </Link>
  );
}
