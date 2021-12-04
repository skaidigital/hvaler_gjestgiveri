import Link from "next/link";
import { Layout } from "../../1_Small/Base";
import { PrimaryButtonHref } from "../../1_Small/Buttons";
import { NavLink } from "../../1_Small/NavLink";

export const Desktopnav = () => {
  return (
    <Layout>
      <div className="flex justify-between my-24">
        <div className="self-center ">
          <Link href="/">
            <a>
              <p className="text-h4 font-semibold flex mb-0 ">Hvaler Gjestgiveri</p>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <NavLink href="/">hjem</NavLink>
          <NavLink href="mat-og-vin">Mat & Vin</NavLink>
          <NavLink href="/">Arrangement</NavLink>
          <NavLink href="sommerfest-i-hvaler">Festival</NavLink>
          <NavLink href="overnatting">Overnatting</NavLink>
          <div className="ml-32">
            <PrimaryButtonHref text="Kontakt oss" href="kontakt-oss" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
