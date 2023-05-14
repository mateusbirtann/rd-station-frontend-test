import Logo from "@/components/Logo";
import MobileNavMenu from "@/components/MobileNavMenu";
import DesktopNavMenu from "@/components/DesktopNavMenu";

const Header = () => {
  return (
    <div className="h-20 w-full border-gray-lighter border-b-2 z-30">
      <div className="flex relative h-full justify-between items-center bg-white max-w-[1224px] mx-auto w-full xs:w-[328px] xl:w-full px-4 xs:p-0">
        <Logo />
        <div className="xl:hidden">
          <MobileNavMenu />
        </div>
        <div className="hidden xl:block">
          <DesktopNavMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
