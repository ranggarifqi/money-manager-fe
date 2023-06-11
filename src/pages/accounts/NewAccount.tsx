import { usePageTitle } from "../../commons/hooks/usePageTitle";

const NewAccount = () => {
  usePageTitle({
    title: "New Accounts",
    breadcrumb: ["Accounts", "New"],
  });

  return <div className="">New Account</div>;
};

export default NewAccount;
