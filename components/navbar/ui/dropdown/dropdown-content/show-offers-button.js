import classes from "./show-offers-button.module.css";
import Ripples from "react-ripples";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NavbarContext } from "@/components/navbar/navbar";

export default function ShowOffersButton({ filter }) {
  const { query } = useRouter();
  const { salary } = useContext(NavbarContext);

  const newQuery = {
    ...query,
    salary: `${salary[0]} UAH-${salary[1]} UAH`,
  };

  return (
    <Link href={{ pathname: `/${filter}`, query: newQuery }}>
      <Ripples className={classes.button_ripple}>
        <span className={`${classes.button_inner}`}>Show offers</span>
      </Ripples>
    </Link>
  );
}
