import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Layout } from "../../1_Small/Base";
import { MobileNavButton } from "../../1_Small/MobileNavButton";
import { MobileNavLink } from "../../1_Small/MobileNavLink";
import { MobileNavArrangement } from "./MobileNavArrangement";

export const Mobilenav = () => {
  const [showMobilenav, setShowMobilenav] = useState(false);
  const [openArrangement, setOpenArrangement] = useState(false);
  const [showMainOptions, setShowMainOptions] = useState(false);

  const showArrangement = () => {
    setShowMainOptions(false);
    setOpenArrangement(true);
  };

  const previousScreenHandler = () => {
    setOpenArrangement(false);
    setShowMainOptions(true);
  };

  const openFirstScreen = () => {
    setShowMobilenav(() => !showMobilenav);
    setShowMainOptions(() => !showMainOptions);
  };

  useEffect(() => {
    return () => {
      setShowMobilenav(!showMobilenav);
    };
  }, [showMobilenav]);

  const OpenMobileNav = () => {
    return (
      <>
        <div className="flex flex-col mb-56">
          <MobileNavLink href="/">Hjem</MobileNavLink>
          <MobileNavLink href="/mat-og-vin">Mat & Vin</MobileNavLink>
          <MobileNavButton onClick={showArrangement}>
            <div className="flex justify-between w-100 items-center">
              Arrangement <span className="">{chevron}</span>
            </div>
          </MobileNavButton>
          <MobileNavLink href="/overnatting">Overnatting</MobileNavLink>
          <MobileNavLink href="/kontakt-oss">Kontakt oss</MobileNavLink>
        </div>
      </>
    );
  };

  const storeNameOrLogo = "Hvaler Gjestgiveri";

  return (
    <>
      <Layout>
        <div className="flex justify-between py-24">
          <Link href="/">
            <a className="text-h3 font-semibold flex mb-0 self-center">{storeNameOrLogo}</a>
          </Link>

          <div className="strek flex self-center" onClick={openFirstScreen}>
            <Hamburger
              toggled={showMobilenav}
              toggle={setShowMobilenav}
              easing="ease"
              rounded
              label="Vis meny"
              hideOutline={false}
            />
          </div>
        </div>
        {openArrangement && <MobileNavArrangement onClick={previousScreenHandler} />}
        {showMainOptions && <OpenMobileNav />}
      </Layout>
    </>
  );
};

const chevron = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#23425F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down rotate-90"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
