import Image from "next/image";
import classes from "./filter.module.css";
import Link from "next/link";

export default function Filter(props) {
  let { name } = props;
  name = name.replace(".", "");
  const path = `/images/filters/${name}.svg`;

  return (
    <Link href={`/all/${name}`}>
      <div className={classes.filter}>
        <div className={classes.filter_image}>
          <Image width={50} height={50} src={path} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
}
