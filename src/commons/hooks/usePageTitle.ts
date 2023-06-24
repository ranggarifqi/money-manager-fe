import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../../pages/main/Main";

export interface Breadcrumb {
  label: string;
  link?: string;
}

interface PageTitle {
  title: string;
  breadcrumb: Breadcrumb[];
}

export const usePageTitle = ({ breadcrumb, title }: PageTitle) => {
  const [setTitle, setBreadcrumb] = useOutletContext<OutletContext>();

  useEffect(() => {
    setTitle(title);
    setBreadcrumb(breadcrumb);
  }, []);
};
