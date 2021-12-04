import Link from "next/link";
import { camelCase } from "../helpers/toCamelCase";

export const NavLinkSommerfest = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="ml-24 text-white">{camelCase(children)}</a>
    </Link>
  );
};
