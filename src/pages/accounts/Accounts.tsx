import { usePageTitle } from "../../commons/hooks/usePageTitle";
import AccountCard from "./commons/AccountCard";
import AddAccountCard from "./commons/AddAccountButton";

const Accounts = () => {
  usePageTitle({
    title: "Accounts",
    breadcrumb: ["Accounts"],
  });

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-12 pt-7">
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AccountCard title="Account Name" />
      <AddAccountCard />
    </div>
  );
};

export default Accounts;
