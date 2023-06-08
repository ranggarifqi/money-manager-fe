import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SideNavMenu = () => {
  return (
    <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
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
  );
};

export default SideNavMenu;
