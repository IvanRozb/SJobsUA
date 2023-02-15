import "../styles/globals.css";
import "../styles/map-popup.css";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
