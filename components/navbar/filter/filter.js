import Image from "next/image";
import classes from "./filter.module.css";
import Link from "next/link";

export default function Filter(props) {
  let { name, isActive } = props;
  const path = `/images/filters/${name.replace(".", "")}.svg`;

  return (
    <Link href={`/all/${name.replace(".", "")}`}>
      <div className={`${classes.filter} ${isActive ? classes.active : ""}`}>
        <div className={classes.filter_image}>
          <Image
            width={50}
            height={50}
            src={path}
            alt={name.replace(".", "")}
          />
        </div>
        <p>{name.replace("CSharp", "C#")}</p>
      </div>
    </Link>
  );
}
