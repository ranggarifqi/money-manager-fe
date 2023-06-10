import { Link } from "react-router-dom";

interface Props {
  redirectTo: string;
  label: string;
  Icon?: React.ElementType;
}

const SideNavMenuItem = ({ label, redirectTo, Icon }: Props) => {
  return (
    <li className="relative">
      <Link
        to={redirectTo}
        className="group no-underline text-white hover:no-underline flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-main-50 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref
      >
        {Icon && <Icon className="mr-4 w-5 h-5" />}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SideNavMenuItem;