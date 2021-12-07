import { Desktopnav } from "./Desktopnav";
import { DesktopnavSommerfest } from "./DesktopnavSommerfest";
import { Mobilenav } from "./Mobilenav";
import { MobilenavSommerfest } from "./MobilenavSommerfest";

export const NavbarSommerfest = () => {
  return (
    <>
      <nav className="lg:hidden bg-sommerfest_primary">
        <MobilenavSommerfest />
      </nav>
      <nav className="hidden lg:flex bg-sommerfest_primary z-2">
        <DesktopnavSommerfest />
      </nav>
    </>
  );
};
