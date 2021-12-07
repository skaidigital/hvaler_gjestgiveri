import Link from "next/link";
import { Layout } from "../../1_Small/Base";
import { PrimaryButtonHref } from "../../1_Small/Buttons";
import { NavLinkSommerfest } from "../../1_Small/NavLinkSommerfest";

export const DesktopnavSommerfest = () => {
  return (
    <Layout>
      <div className="flex justify-between my-24">
        <div className="self-center ">
          <Link href="/">
            <a className="text-h4 text-white font-semibold flex mb-0 items-center underline">
              {chevron}
              <span className="mx-4" /> Tilbake til Hvaler Gjestgiveri
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="ml-32">
            <Link href="">
              <a className="bg-sommerfest_CTA text-body_medium py-16 px-24 text-white font-semibold">Kjøp billetter</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const chevron = (
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
