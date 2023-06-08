import { useEffect } from "react";
import { Sidenav, initTE } from "tw-elements";
import UserInfo from "./SideNav/UserInfo";
import SideNavMenu from "./SideNav/SideNavMenu";

const SideNav = () => {
  useEffect(() => {
    initTE({ Sidenav });
  }, []);

  return (
    <nav
      id="sidenav"
      className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-mode="side"
      data-te-sidenav-content="#content"
      data-te-sidenav-hidden="false"
    >
      <UserInfo />
      <hr className="border-gray-300" />
      <SideNavMenu />
    </nav>
  );
};

export default SideNav;
