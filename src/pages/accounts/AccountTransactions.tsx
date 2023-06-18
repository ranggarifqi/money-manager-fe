import { useParams } from "react-router-dom";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../store/account/selectors";
import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import AccountTransactionsList from "./commons/AccountTransactionsList";

const AccountTransactions = () => {
  const { accountId } = useParams();

  const account = useAppSelector((state) =>
    sltAccountById(state, accountId ?? "")
  );

  usePageTitle({
    title: `Account Transactions - ${account?.name}`,
    breadcrumb: ["Accounts", account?.name ?? "", "Transactions"],
  });

  return (
    <div className="">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4">
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">Deposit</h3>
          <Spacer height={10} />
          <h2 className="sm:text-xl text-sm">Rp 15.000.000,00</h2>
        </Card>
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">Withdrawal</h3>
          <Spacer height={10} />
          <h2 className="sm:text-xl text-sm">Rp 15.000.000,00</h2>
        </Card>
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">This Month's Balance</h3>
          <Spacer height={10} />
          <h2 className="sm:text-xl text-sm">Rp 15.000.000,00</h2>
        </Card>
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">Overall Balance</h3>
          <Spacer height={10} />
          <h2 className="sm:text-xl text-sm">Rp 15.000.000,00</h2>
        </Card>
      </div>
      <Spacer height={30} />
      <div className="grid sm:grid-cols-2 grid-cols-1 items-start gap-4">
        <Card className="">
          <h2>Filter</h2>
          <Spacer height={10} />
          <p>asdasd</p>
          <p>asdasd</p>
        </Card>
        <AccountTransactionsList />
      </div>
    </div>
  );
};

export default AccountTransactions;
