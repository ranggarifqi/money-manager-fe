import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../../pages/main/Main";

interface PageTitle {
  title: string;
  breadcrumb: string[];
}

export const usePageTitle = ({ breadcrumb, title }: PageTitle) => {
  const [setTitle, setBreadcrumb] = useOutletContext<OutletContext>();

  useEffect(() => {
    setTitle(title);
    setBreadcrumb(breadcrumb);
  }, []);
};
