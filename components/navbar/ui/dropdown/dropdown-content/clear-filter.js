import classesClear from "@/components/navbar/ui/dropdown/dropdown-content/clear-filter.module.css";
import classesItem from "@/components/navbar/location-filter/collections/location-item.module.css";
import Ripples from "react-ripples";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ClearFilter({ filter, parameters = [] }) {
  const { query } = useRouter();

  const handleClearFilter = () => {
    const newQuery = { ...query };
    for (const parameter of parameters) {
      delete newQuery[parameter];
    }
    delete newQuery["filter"];
    return { pathname: `/${filter}`, query: newQuery };
  };

  return (
    <Link href={handleClearFilter()}>
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
