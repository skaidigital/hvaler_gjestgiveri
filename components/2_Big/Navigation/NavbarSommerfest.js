import { Desktopnav } from "./Desktopnav";
import { DesktopnavSommerfest } from "./DesktopnavSommerfest";
import { Mobilenav } from "./Mobilenav";

export const NavbarSommerfest = () => {
  return (
    <>
      <nav className="lg:hidden border-b border-1 border-neutral_200">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex bg-sommerfest_primary z-2">
        <DesktopnavSommerfest />
      </nav>
    </>
  );
};
