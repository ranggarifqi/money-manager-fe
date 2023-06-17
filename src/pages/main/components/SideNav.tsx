import { useEffect } from "react";
import { Sidenav, initTE } from "tw-elements";
import UserInfo from "./SideNav/UserInfo";
import SideNavMenu from "./SideNav/SideNavMenu";
import Spacer from "../../../commons/components/Spacer";

const DEFAULT_SIDENAV_SM = 640;

const SideNav = () => {
  useEffect(() => {
    initTE({ Sidenav });
  }, []);

  useEffect(() => {
    let innerWidth: number | null = null;
    const sidenav = document.getElementById("sidenav");
    const sidenavInstance = Sidenav.getInstance(sidenav);

    const callback = () => {
      // Check necessary for Android devices
      if (window.innerWidth === innerWidth) {
        return;
      }

      innerWidth = window.innerWidth;

      if (window.innerWidth < sidenavInstance.getBreakpoint("lg")) {
        sidenavInstance.changeMode("over");
        sidenavInstance.hide();
      } else {
        sidenavInstance.changeMode("side");
        sidenavInstance.show();
      }
    };

    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  const shouldHide = window.innerWidth < DEFAULT_SIDENAV_SM;

  return (
    <nav
      id="sidenav"
      className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-light-shades shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-content="#content"
      data-te-sidenav-hidden={shouldHide}
      data-te-sidenav-mode-breakpoint-over="0"
      data-te-sidenav-mode-breakpoint-side="lg"
    >
      <UserInfo />
      <Spacer height={10} />
      <SideNavMenu />
    </nav>
  );
};

export default SideNav;
