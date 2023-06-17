import Spacer from "../../../commons/components/Spacer";
import Spinner from "../../../commons/components/Spinner";
import { useFindTransactionByAccountQuery } from "../../../store/transaction/api";
import RecentTransactionItem from "./RecentTransactionItem";

interface Props {
  accountId: string;
}

const RecentTransaction = ({ accountId }: Props) => {
  const { isFetching, data } = useFindTransactionByAccountQuery({
    accountId,
    limit: 3,
  });

  if (isFetching) {
    return <Spinner />;
  }

  const renderData = () => {
    if (!data || data.length === 0) {
      return <p className="text-xs">No Transaction found.</p>;
    }
    return data?.map(() => {
      return <RecentTransactionItem />;
    });
  };

  return (
    <div className="flex-1">
      <p className="text-light-accent">Recent Transactions</p>
      <Spacer height={6} />
      <ul className="flex flex-col gap-y-2">{renderData()}</ul>
    </div>
  );
};

export default RecentTransaction;
