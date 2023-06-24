import Spinner from "../../commons/components/Spinner";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useFindAccountsQuery } from "../../store/account/api";
import { sltAccountError, sltAllAccounts } from "../../store/account/selectors";
import AccountCard from "./commons/AccountCard";
import AddAccountCard from "./commons/AddAccountButton";

const Accounts = () => {
  usePageTitle({
    title: "Accounts",
    breadcrumb: [
      {
        label: "Accounts",
      },
    ],
  });

  const { isLoading } = useFindAccountsQuery();

  const accounts = useAppSelector(sltAllAccounts);
  const error = useAppSelector(sltAccountError);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-12 pt-7">
      {accounts.map((account) => {
        return <AccountCard key={account.id} accountId={account.id} />;
      })}
      <AddAccountCard />
    </div>
  );
};

export default Accounts;
