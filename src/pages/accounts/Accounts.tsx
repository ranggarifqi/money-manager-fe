import { usePageTitle } from "../../commons/hooks/usePageTitle";
import AccountCard from "./commons/AccountCard";

const Accounts = () => {
  usePageTitle({
    title: "Accounts",
    breadcrumb: ["Accounts"],
  });

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-12 pt-7">
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
    </div>
  );
};

export default Accounts;
