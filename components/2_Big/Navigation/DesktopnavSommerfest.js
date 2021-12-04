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
            <a>
              <p className="text-h4 text-white font-semibold flex mb-0 ">Hvaler Gjestgiveri</p>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <NavLinkSommerfest href="/">hjem</NavLinkSommerfest>
          <NavLinkSommerfest href="mat-og-vin">Mat & Vin</NavLinkSommerfest>
          <NavLinkSommerfest href="/">Arrangement</NavLinkSommerfest>
          <NavLinkSommerfest href="sommerfest-i-hvaler">Festival</NavLinkSommerfest>
          <NavLinkSommerfest href="overnatting">Overnatting</NavLinkSommerfest>
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
