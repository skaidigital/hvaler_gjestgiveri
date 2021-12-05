import Link from "next/link";
import { camelCase } from "../helpers/toCamelCase";

export const NavLink = ({ children, href }) => {
  return (
    <Link href={href} className="">
      <a className="ml-24 nav-hover">{camelCase(children)}</a>
    </Link>
  );
};
