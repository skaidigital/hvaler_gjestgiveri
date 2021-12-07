import { useRouter } from "next/dist/client/router";
import React from "react";
import Link from "next/link";
import { camelCase } from "../helpers/toCamelCase";

export const NavLink = ({ children, href }, props) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        pathName={router.pathname}
        className={`${`${href == "/" ? href : `/${href}`}` == router.pathname && "nav-current-page"} ml-24 nav-hover`}
      >
        {camelCase(children)}
      </a>
    </Link>
  );
};
