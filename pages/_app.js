import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/index.css";
import "../styles/helper.css";
import CookieConsentComponent from "../components/1_Small/CookieConsent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <CookieConsentComponent />
    </>
  );
}

export default MyApp;
