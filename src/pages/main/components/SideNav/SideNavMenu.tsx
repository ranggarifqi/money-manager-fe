import { CurrencyDollarIcon, HomeIcon } from "@heroicons/react/24/outline";
import SideNavMenuItem from "./SideNavMenuItem";

const SideNavMenu = () => {
  return (
    <ul className="relative list-none px-[0.2rem]" data-te-sidenav-menu-ref>
      <SideNavMenuItem label="Dashboard" redirectTo="/" Icon={HomeIcon} />
      <SideNavMenuItem
        label="Accounts"
        redirectTo="/accounts"
        Icon={CurrencyDollarIcon}
      />
    </ul>
  );
};

export default SideNavMenu;
