import { HomeIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidenav, initTE } from "tw-elements";

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
      <div className="mt-6">
        <div id="header-content" className="pl-4">
          <h4 className="mb-2 text-2xl font-medium leading-[1.2]">Ann Smith</h4>
          <p className="mb-4">ann_s@mdbootstrap.com</p>
        </div>
        <hr className="border-gray-300" />
      </div>
      <div>
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          <li className="relative">
            <Link
              to="/"
              className="group no-underline hover:no-underline flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <HomeIcon className="mr-4 w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
