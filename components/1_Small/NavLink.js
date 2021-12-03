import Link from "next/link";
import { camelCase } from "../helpers/toCamelCase";

export const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="ml-24">{camelCase(children)}</a>
    </Link>
  );
};
