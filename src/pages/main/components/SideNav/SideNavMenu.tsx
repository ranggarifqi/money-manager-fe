import { HomeIcon } from "@heroicons/react/24/outline";
import SideNavMenuItem from "./SideNavMenuItem";

const SideNavMenu = () => {
  return (
    <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
      <SideNavMenuItem label="Dashboard" redirectTo="/" Icon={HomeIcon} />
    </ul>
  );
};

export default SideNavMenu;
