import { Bars3Icon } from "@heroicons/react/24/outline";
import LogoutButton from "./Header/LogoutButton";

const Header = () => {
  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-main-800 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
          type="button"
          data-te-sidenav-toggle-ref
          data-te-collapse-init
          data-te-target="#sidenav"
        >
          <Bars3Icon className="w-7 h-7 text-white" />
        </button>

        <div className="relative flex items-center">
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
