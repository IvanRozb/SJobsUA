import Sidebar from "@/components/sidebar/sidebar";
import classes from "./layout.module.css";
import Navbar from "@/components/navbar/navbar";

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.layout_side_map_inner}>
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
}
