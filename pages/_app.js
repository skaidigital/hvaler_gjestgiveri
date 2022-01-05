import { DefaultSeo } from "next-seo";
import Script from "next/script";
import SEO from "../next-seo.config";
import "../styles/index.css";
import "../styles/helper.css";
import CookieConsentComponent from "../components/1_Small/CookieConsent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GTAG}`}
      />
      <Script strategy="afterInteractive" id="gtg-data">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-${process.env.NEXT_PUBLIC_GTAG}');
        `}
      </Script>

      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <CookieConsentComponent />
    </>
  );
}

export default MyApp;
