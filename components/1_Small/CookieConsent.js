import Link from "next/link";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Layout } from "./Base";
// import { getPageFiles } from "next/dist/next-server/server/get-page-files";

const checkConsent = () => {
  if (getCookieConsentValue) {
    return gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  } else {
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
  }
};

const CookieConsentComponent = () => {
  return (
    <Layout>
      <CookieConsent
        enableDeclineButton
        containerClasses="lg:px-80"
        contentClasses="py-16 h-0100 flex items-center max-w-[70%]"
        buttonClasses="flex self-center "
        buttonWrapperClasses="flex self-center md:items-end md:flex-col lg:flex-row flex-row-reverse"
        declineButtonText="X"
        declineButtonStyle={{
          background: "#808080",
          width: "56px",
          padding: "16px 22px",
          borderRadius: "50%",
          fontWeight: "bold",
        }}
        button
        className="bg-black"
        buttonStyle={{
          color: "#fffff",
          borderRadius: "5px",
          padding: "16px 80px",
          background: "#B84825",
          display: "flex",
          alignSelf: "flex-center",
        }}
        buttonText="Aksepter"
        // onAccept={() => {
        //   checkConsent();
        // }}
        style={{ background: "#3F8DAB" }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex self-center">
            <p className="text-navSmall text-white">
              Vi bruker kun nødvendige cookies(informasjonskapsler) som er en
              integrert del av nettsiden vår. Vi bruker ingen cookies for
              markedsføringsformål. Vi bruker Google Analytics for
              nettsideanalyse.{" "}
              <Link href="personvern" className="underline text-white">
                Klikk her for å lese om vår personvernerklæring
              </Link>
            </p>
          </div>
        </div>
      </CookieConsent>
    </Layout>
  );
};

export default CookieConsentComponent;
