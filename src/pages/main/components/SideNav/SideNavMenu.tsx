import { CurrencyDollarIcon, HomeIcon } from "@heroicons/react/24/outline";
import SideNavMenuItem from "./SideNavMenuItem";
import SideNavMenuGroup from "./SideNavMenuGroup";

const SideNavMenu = () => {
  return (
    <ul className="relative list-none px-[0.2rem]" data-te-sidenav-menu-ref>
      <SideNavMenuItem label="Dashboard" redirectTo="/" Icon={HomeIcon} />
      <SideNavMenuGroup label="Manage">
        <SideNavMenuItem
          label="Accounts"
          redirectTo="/accounts"
          Icon={CurrencyDollarIcon}
        />
      </SideNavMenuGroup>
    </ul>
  );
};

export default SideNavMenu;
