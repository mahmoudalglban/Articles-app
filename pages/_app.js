import Layout from "../layouts/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <div dir="rtl">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;
