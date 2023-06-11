import { usePageTitle } from "../../commons/hooks/usePageTitle";

const Accounts = () => {
  usePageTitle({
    title: "Accounts",
    breadcrumb: ["Accounts"],
  });

  return <>Accounts</>;
};

export default Accounts;
