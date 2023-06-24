import { groupBy } from "lodash-es";
import { styled } from "styled-components";

import Card from "../../../../commons/components/Card";
import { ITransactionWithAssociation } from "../../../../commons/models/transaction";
import {
  getDayFromDateStr,
  getMonthFromDateStr,
  getYearFromDateStr,
  toDateOnlyString,
} from "../../../../commons/lib/date";
import { useCurrencyFormatter } from "../../../../commons/hooks/useCurrencyFormatter";

interface Props {
  data?: ITransactionWithAssociation[];
}

const AccountTransactionList = ({ data = [] }: Props) => {
  const { formatBalance } = useCurrencyFormatter();

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

        const totalDeposit = transactions.reduce((res, v) => {
          if (v.toAccountId !== null) {
            return res + v.amount;
          }
          return res;
        }, 0);

        const totalWithdrawal = transactions.reduce((res, v) => {
          if (v.fromAccountId !== null) {
            return res + v.amount;
          }
          return res;
        }, 0);

        return (
          <DayCard bgColor="white" key={dateStr}>
            <div className="flex border-b-2 py-2 px-4 gap-x-2 items-center">
              <span className="flex-1">
                <span className="text-lg">{getDayFromDateStr(dateStr)}</span>{" "}
                <span className="text-xs">
                  / {getMonthFromDateStr(dateStr)} /{" "}
                  {getYearFromDateStr(dateStr)}
                </span>
              </span>
              <span className="flex-1 text-success text-right">
                {formatBalance(totalDeposit)}
              </span>
              <span className="flex-1 text-danger text-right">
                {formatBalance(totalWithdrawal)}
              </span>
            </div>
            <div className="flex flex-col divide-y">
              <div className="px-4 py-2 flex w-full gap-x-4">
                <div className="flex-0 w-[5rem]">
                  <p className="truncate">Category</p>
                  <p className="text-xs truncate">Sub Category</p>
                </div>
                <div className="flex-0">
                  <p>Transaction</p>
                  <p className="text-xs">Account Name</p>
                </div>
                <div className="flex-1 text-right">Rp 0</div>
              </div>
              <div className="px-4 py-2 flex w-full gap-x-4">
                <div className="flex-0 w-[5rem]">
                  <p className="truncate">Category</p>
                  <p className="text-xs truncate">Sub Category</p>
                </div>
                <div className="flex-0">
                  <p>Transaction</p>
                  <p className="text-xs">Account Name</p>
                </div>
                <div className="flex-1 text-right">Rp 0</div>
              </div>
              <div className="px-4 py-2 flex w-full gap-x-4">
                <div className="flex-0 w-[5rem]">
                  <p className="truncate">Category</p>
                  <p className="text-xs truncate">Sub Category</p>
                </div>
                <div className="flex-0">
                  <p>Transaction</p>
                  <p className="text-xs">Account Name</p>
                </div>
                <div className="flex-1 text-right">Rp 0</div>
              </div>
            </div>
          </DayCard>
        );
      })}
    </div>
  );
};

const DayCard = styled(Card)`
  padding: 0;
  border-ra
`;

export default AccountTransactionList;
