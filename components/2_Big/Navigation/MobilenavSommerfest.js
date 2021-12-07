import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Layout } from "../../1_Small/Base";
import { MobileNavButton } from "../../1_Small/MobileNavButton";
import { MobileNavLink } from "../../1_Small/MobileNavLink";
import { MobileNavArrangement } from "./MobileNavArrangement";

export const MobilenavSommerfest = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-between py-24">
          <Link href="/">
            <a className="text-h4 text-white font-semibold flex mb-0 items-center underline">
              {chevron_left}
              <span className="mx-4" /> Tilbake til Hvaler Gjestgiveri
            </a>
          </Link>
        </div>
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

const chevron_left = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down rotate90"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
