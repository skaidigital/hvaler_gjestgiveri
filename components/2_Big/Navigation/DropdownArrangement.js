import Link from "next/link";

export const DropdownArrangement = () => {
  const NavItem = ({ href, children }) => {
    return (
      <Link
        href={href}
        className="sexy-animation nav-hover hover:bg-neutral_300 px-16 py-8 font-medium"
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="flex flex-col bg-grey border border-1 border-neutral_300">
      <NavItem href="/andre-arrangement">Temakvelder</NavItem>
      <NavItem href="/bryllup">Bryllup</NavItem>
      <NavItem href="/kurs-og-konferanser">Kurs & Konferanser</NavItem>
      <NavItem href="/selskap">Selskap</NavItem>
    </div>
  );
};
