import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";
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

const logo = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <rect width="512" height="512" rx="256" fill="#ffffff" />
      <path
        d="M370.545 199.545C361.455 152.273 323.636 122.091 258.182 122.091C190.909 122.091 145.091 155.182 145.273 206.818C145.091 247.545 170.182 274.455 223.818 285.545L271.455 295.545C297.091 301.182 309.091 311.545 309.091 327.364C309.091 346.455 288.364 360.818 257.091 360.818C226.909 360.818 207.273 347.727 201.636 322.636L137.455 328.818C145.636 380.091 188.727 410.455 257.273 410.455C327.091 410.455 376.364 374.273 376.545 321.364C376.364 281.545 350.727 257.182 298 245.727L250.364 235.545C222 229.182 210.727 219.364 210.909 203.182C210.727 184.273 231.636 171.182 259.091 171.182C289.455 171.182 305.455 187.727 310.545 206.091L370.545 199.545Z"
        fill="#25777E"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="512" height="512" rx="256" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const test = () => {
  return "test";
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
        onAccept={() => {
          checkConsent();
        }}
        style={{ background: "#3F8DAB" }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex self-center">
            <p className="text-navSmall text-white">
              Vi bruker kun nødvendige cookies(informasjonskapsler) som er en
              integrert del av nettsiden vår. Vi bruker ingen cookies for
              markedsføringsformål. Vi bruker Google Analytics for
              nettsideanalyse.{" "}
              <Link href="personvern">
                <a className="underline text-white">
                  Klikk her for å lese om vår personvernerklæring
                </a>
              </Link>
            </p>
          </div>
        </div>
      </CookieConsent>
    </Layout>
  );
};

export default CookieConsentComponent;
