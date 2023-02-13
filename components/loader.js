import classes from "@/components/loader.module.css";
import Image from "next/image";

export default function Loader() {
  return (
    <div className={classes.loader}>
      <Image
        src={"images/loader.svg"}
        alt={"loader"}
        width={100}
        height={100}
      />
    </div>
  );
}
