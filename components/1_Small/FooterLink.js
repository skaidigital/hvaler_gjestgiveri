import Link from "next/link";

export const FooterLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="underline text-white pb-8">{children}</a>
    </Link>
  );
};
