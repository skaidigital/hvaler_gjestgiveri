import Link from "next/link";
import { useRef, useState } from "react";
import { Layout } from "../../1_Small/Base";
import { PrimaryButtonHref } from "../../1_Small/Buttons";
import { NavLink } from "../../1_Small/NavLink";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { DropdownArrangement } from "./DropdownArrangement";

export const Desktopnav = () => {
  const dropdownRef = useRef();
  const [openDropdownArrangement, setOpenDropdownArrangement] = useState(false);

  const toggleDropdownArrangement = () => {
    setOpenDropdownArrangement(!openDropdownArrangement);
  };

  useOnClickOutside(dropdownRef, () => setOpenDropdownArrangement(false));

  const ArrangementDropdownOpen = () => {
    return (
      <div className="absolute ml-24 mt-40 z-300" ref={dropdownRef}>
        <DropdownArrangement />
      </div>
    );
  };

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        openDropdownArrangement && "rotate-180"
      } feather mt-2 feather-chevron-down `}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <Layout>
      <div className="flex justify-between my-24">
        <div className="self-center ">
          <Link href="/">
            <a>
              <p className="text-h4 font-semibold flex mb-0 ">
                Hvaler Gjestgiveri
              </p>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <NavLink href="/">hjem</NavLink>
          <NavLink href="mat-og-vin">Mat & Vin</NavLink>
          <div className="flex flex-col ">
            <button
              className="ml-24 nav-hover text-neutral_700 flex items-center"
              type="button"
              onClick={toggleDropdownArrangement}
            >
              Arrangement <span className="ml-4">{chevron}</span>
            </button>
            {openDropdownArrangement && <ArrangementDropdownOpen />}
          </div>

          <NavLink href="sommerfest-i-hvaler">FestIHvaler</NavLink>
          <NavLink href="overnatting">Overnatting</NavLink>
          <div className="ml-32">
            <Link href="kontakt-oss">
              <a className="justify-center bg-cta border-2 border-cta text-hvit font-semibold w-100 flex md:w-auto bg-primary_700 px-16 py-8 text-white">
                Kontakt oss
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
