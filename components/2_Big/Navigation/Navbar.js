import { Desktopnav } from "./Desktopnav";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <>
      <nav className="lg:hidden border-b border-1 border-neutral_200">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex border-b border-1 border-neutral_200">
        <Desktopnav />
      </nav>
    </>
  );
};
