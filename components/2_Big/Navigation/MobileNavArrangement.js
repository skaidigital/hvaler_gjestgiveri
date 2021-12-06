import { Layout } from "../../1_Small/Base";
import { MobileNavButton } from "../../1_Small/MobileNavButton";
import { MobileNavLink } from "../../1_Small/MobileNavLink";

export const MobileNavArrangement = ({ onClick }) => {
  return (
    <div className="flex flex-col mb-56">
      <MobileNavButton onClick={onClick}>
        <div className="flex items-center text-primary_700 underline-none">
          <span className="mr-8">{chevron}</span> Gå tilbake
        </div>
      </MobileNavButton>
      <MobileNavLink href="/bryllup">Bryllup</MobileNavLink>
      <MobileNavLink href="/kurs-og-konferanser">Kurs & Konferanser</MobileNavLink>
      <MobileNavLink href="/selskap">Selskap</MobileNavLink>
      <MobileNavLink href="/andre-arrangement">Andre arrangement</MobileNavLink>
    </div>
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
    className="feather feather-chevron-down rotate90"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
