import { useCurrencyFormatter } from "../../../commons/hooks/useCurrencyFormatter";
import { ETransactionType } from "../../../commons/models/transactionType";
import { toHumanReadableDate } from "../../../commons/lib/date";

interface Props {
  transactionType: ETransactionType;
  date: string;
  amount: number;
}

const RecentTransactionItem = ({ amount, date, transactionType }: Props) => {
  const { formatBalance } = useCurrencyFormatter();

  const renderTransactionType = () => {
    if (transactionType === ETransactionType.EXPENSE) {
      return <p className="text-danger">OUT</p>;
    }

    return <p className="text-success">IN</p>;
  };

  const renderAmount = () => {
    if (transactionType === ETransactionType.EXPENSE) {
      return <p className="text-danger">-{formatBalance(amount)}</p>;
    }
    return <p className="text-success">+{formatBalance(amount)}</p>;
  };

  return (
    <li className="flex justify-between gap-x-5">
      <div className="flex-none w-8 h-8 font-semibold text-lg self-center justify-self-center">
        {renderTransactionType()}
      </div>
      <div className="flex-1">
        <p className="font-semibold">[Nama]</p>
        <p className="text-dark-accent">{toHumanReadableDate(date)}</p>
      </div>
      <div className="flex-1 self-center justify-self-end text-right">
        {renderAmount()}
      </div>
    </li>
  );
};

export default RecentTransactionItem;
