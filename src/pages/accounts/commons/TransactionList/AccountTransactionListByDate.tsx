import { styled } from "styled-components";
import Card from "../../../../commons/components/Card";
import { ITransactionWithAssociation } from "../../../../commons/models/transaction";
import {
  getDayFromDateStr,
  getMonthFromDateStr,
  getYearFromDateStr,
} from "../../../../commons/lib/date";
import { useCurrencyFormatter } from "../../../../commons/hooks/useCurrencyFormatter";
import classNames from "classnames";
import { ETransactionType } from "../../../../commons/models/transactionType";

interface Props {
  dateStr: string;
  transactions?: ITransactionWithAssociation[];
}

const AccountTransactionListByDate = ({
  dateStr,
  transactions = [],
}: Props) => {
  const { formatBalance } = useCurrencyFormatter();

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
    <DayCard bgColor="white">
      <div className="flex border-b-2 py-2 px-4 gap-x-2 items-center">
        <span className="flex-1">
          <span className="text-lg">{getDayFromDateStr(dateStr)}</span>{" "}
          <span className="text-xs">
            / {getMonthFromDateStr(dateStr)} / {getYearFromDateStr(dateStr)}
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
        {transactions.map((transaction) => {
          return (
            <div className="px-4 py-2 flex w-full gap-x-4">
              <div className="flex-0 w-[6rem]">
                <p className="truncate">
                  {transaction.Category
                    ? transaction.Category.name
                    : "Uncategorized"}
                </p>
                {/* TODO: Subcategory */}
                {/* <p className="text-xs truncate">Sub Category</p> */}
              </div>
              <div className="flex-0">
                <p className="truncate">{transaction.transactionName}</p>
              </div>
              <div
                className={classNames("flex-1 text-right", {
                  "text-success":
                    transaction.transactionTypeName === ETransactionType.INCOME,
                  "text-danger":
                    transaction.transactionTypeName ===
                    ETransactionType.EXPENSE,
                })}
              >
                {formatBalance(transaction.amount)}
              </div>
            </div>
          );
        })}
      </div>
    </DayCard>
  );
};

const DayCard = styled(Card)`
  padding: 0;
  border-ra
`;

export default AccountTransactionListByDate;
