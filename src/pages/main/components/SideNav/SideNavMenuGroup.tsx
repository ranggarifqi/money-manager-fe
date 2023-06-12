import { ReactNode } from "react";

interface Props {
  label?: string;
  children?: ReactNode;
}

const SideNavMenuGroup = ({ label, children }: Props) => {
  return (
    <div className="mt-5">
      {label && (
        <span className="px-6 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400">
          {label}
        </span>
      )}
      {children}
    </div>
  );
};

export default SideNavMenuGroup;
