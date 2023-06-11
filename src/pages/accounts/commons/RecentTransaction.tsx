import Spacer from "../../../commons/components/Spacer";
import RecentTransactionItem from "./RecentTransactionItem";

const RecentTransaction = () => {
  return (
    <div>
      <p className="text-light-accent">Recent Transactions</p>
      <Spacer height={6} />
      <ul className="flex flex-col gap-y-2">
        <RecentTransactionItem />
        <RecentTransactionItem />
        <RecentTransactionItem />
      </ul>
    </div>
  );
};

export default RecentTransaction;
