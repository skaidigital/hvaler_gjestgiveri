import Link from "next/link";
import { camelCase } from "../helpers/toCamelCase";

export const NavLinkSommerfest = ({ children, href }) => {
  return (
    <Link href={href} className="ml-24 text-white">
      {camelCase(children)}
    </Link>
  );
};
