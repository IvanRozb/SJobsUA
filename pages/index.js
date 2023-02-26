import { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Loader from "@/components/loader";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("all");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>SJobsUA</title>
      </Head>
      <Loader />
    </Fragment>
  );
}
