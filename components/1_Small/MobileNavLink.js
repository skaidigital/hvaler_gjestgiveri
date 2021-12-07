import Link from "next/link";

export const MobileNavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-h1 font-semibold text-dark mt-32 underline sexy-animation">{children}</a>
    </Link>
  );
};
