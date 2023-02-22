import Ripples from "react-ripples";
import classes from "@/components/navbar/location-filter/collections/location-item.module.css";
import activeBrick from "@/components/navbar/ui/utilites.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LocationItem({ name, filter, id, isActive }) {
  const { query } = useRouter();
  query.cityName = name;
  query.cityId = id;

  return (
    <Link href={{ pathname: `/${filter}`, query }}>
      <Ripples className={classes.location_ripple}>
        <span
          className={`${classes.location_item} ${
            isActive ? `${activeBrick.active} ${classes.active}` : ""
          }`}
        >
          {name}
        </span>
      </Ripples>
    </Link>
  );
}
