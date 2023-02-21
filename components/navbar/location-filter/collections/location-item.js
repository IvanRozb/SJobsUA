import Ripples from "react-ripples";
import classes from "@/components/navbar/location-filter/collections/location-item.module.css";
import Link from "next/link";

export default function LocationItem({ name, filter, id, isActive }) {
  return (
    <Link
      href={{ pathname: `/${filter}`, query: { cityName: name, cityId: id } }}
    >
      <Ripples className={classes.location_ripple}>
        <span
          className={`${classes.location_item} ${
            isActive ? classes.active : ""
          }`}
        >
          {name}
        </span>
      </Ripples>
    </Link>
  );
}
