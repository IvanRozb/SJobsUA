import Sidebar from "@/components/sidebar/sidebar";
import MapWrapper from "@/components/map/map-wrapper";
import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>SJobsUA</title>
      </Head>
      <div style={{ display: "flex" }}>
        <MapWrapper />
        <Sidebar />
      </div>
    </Fragment>
  );
}
