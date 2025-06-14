import Link from "next/link";

// TODO: Primary button that you use in the project
const PrimaryButtonStyling = `justify-center bg-cta border-2 border-cta text-hvit font-semibold w-100 flex md:w-auto bg-primary_700 p-16 text-white`;
export const PrimaryButtonHref = ({ text, href, iconLeft, iconRight }) => {
  return (
    <Link href={href} className={`${PrimaryButtonStyling}`}>
      {iconLeft != null ? <span className="mr-16">{iconLeft}</span> : null}
      {text}
      {iconRight != null ? <span className="ml-16">{iconRight}</span> : null}
    </Link>
  );
};

export const PrimaryButtonSubmit = ({ text, href }) => {
  return (
    <div type="button" onClick={onClick} className={`${PrimaryButtonStyling}`}>
      {text}
    </div>
  );
};

// TODO: Secondary button is for any CTA besides the main CTA
export const SecondaryButtonHref = ({ text, href, farge }) => {
  return (
    <Link
      href={href}
      className={`justify-center text-${farge} border-2 border-${farge} font-semibold p-16 secondaryButton flex w-0100 md:w-auto rounded-rund`}
    >
      {text}
    </Link>
  );
};
