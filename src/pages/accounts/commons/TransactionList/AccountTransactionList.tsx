import { groupBy } from "lodash-es";
import { ITransactionWithAssociation } from "../../../../commons/models/transaction";
import { toDateOnlyString } from "../../../../commons/lib/date";
import AccountTransactionListByDate from "./AccountTransactionListByDate";

interface Props {
  data?: ITransactionWithAssociation[];
}

const AccountTransactionList = ({ data = [] }: Props) => {
  const hasNoData = data.length === 0;

  if (hasNoData) {
    return <div>No Transactions Available</div>;
  }

  const transactionsGroupedByDate = groupBy(data, (d) => {
    const dateOnly = toDateOnlyString(d.date);
    return dateOnly;
  });

  console.log("transactionsGroupedByDate", transactionsGroupedByDate);

  const dateList = Object.keys(transactionsGroupedByDate);

  return (
    <div className="flex flex-col gap-y-2">
      {dateList.map((dateStr) => {
        const transactions = transactionsGroupedByDate[dateStr] ?? [];

        return (
          <AccountTransactionListByDate
            dateStr={dateStr}
            key={dateStr}
            transactions={transactions}
          />
        );
      })}
    </div>
  );
};

export default AccountTransactionList;
