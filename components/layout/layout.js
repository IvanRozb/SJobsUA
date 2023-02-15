import Sidebar from "@/components/sidebar/sidebar";
import classes from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <Sidebar />
      {props.children}
      {/*<MapWrapper vacancies={props.children} />*/}
    </div>
  );
}
