import Image from "next/image";
import classes from "./filter.module.css";
import Link from "next/link";

export default function Filter(props) {
  let { name, isActive } = props;
  const path = `/images/filters/${
    name[0] === "." ? name.replace(".", "", 1) : name
  }.svg`;

  return (
    <Link href={`/all/${name}`}>
      <div className={classes.filter}>
        <div
          className={`${classes.filter_image} ${
            isActive ? classes.active : ""
          }`}
        >
          <Image width={45} height={45} src={path} alt={name} />
        </div>
        <p>{decodeURIComponent(name)}</p>
      </div>
    </Link>
  );
}
