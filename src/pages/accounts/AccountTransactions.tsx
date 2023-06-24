import { useNavigate, useParams } from "react-router-dom";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../store/account/selectors";
import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import AccountTransactionsCard from "./commons/TransactionList/AccountTransactionsCard";
import AccountTransactionFilterCard from "./commons/TransactionList/AccountTransactionFilterCard";
import { useFindTransactionByAccountQuery } from "../../store/transaction/api";
import RippleButton from "../../commons/components/RippleButton";
import { useState } from "react";
import { endOfMonth, format, startOfMonth } from "date-fns";
import { DATE_ONLY_KEY } from "../../commons/lib/date";
import { useCurrencyFormatter } from "../../commons/hooks/useCurrencyFormatter";
import Spinner from "../../commons/components/Spinner";

const AccountTransactions = () => {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const { formatBalance } = useCurrencyFormatter();

  const account = useAppSelector((state) =>
    sltAccountById(state, accountId ?? "")
  );

  usePageTitle({
    title: `Account Transactions - ${account?.name}`,
    breadcrumb: [
      { label: "Accounts", link: "/accounts" },
      { label: account?.name ?? "" },
      { label: "Transactions" },
    ],
  });

  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const startOfMonthStr = format(startOfMonth(currentMonth), DATE_ONLY_KEY);
  const endOfMonthStr = format(endOfMonth(currentMonth), DATE_ONLY_KEY);

  const { data, isFetching } = useFindTransactionByAccountQuery({
    accountId: accountId ?? "",
    start: startOfMonthStr,
    end: endOfMonthStr,
  });

  if (!accountId) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[10rem]">
          <p>No Account Was Found</p>
          <Spacer height={10} />
          <RippleButton bgColor="info" onClick={() => navigate("/accounts")}>
            Go Back
          </RippleButton>
        </div>
      </div>
    );
  }

  const totalDeposit =
    data?.reduce((res, v) => {
      if (v.toAccountId !== null) {
        return res + v.amount;
      }
      return res;
    }, 0) ?? 0;

  const totalWithdrawal =
    data?.reduce((res, v) => {
      if (v.fromAccountId !== null) {
        return res + v.amount;
      }
      return res;
    }, 0) ?? 0;

  const thisMonthBalance = totalDeposit - totalWithdrawal;

  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4">
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">Deposit</h3>
          <Spacer height={10} />
          {isFetching ? (
            <Spinner />
          ) : (
            <h2 className="sm:text-xl text-sm text-success">
              {formatBalance(totalDeposit)}
            </h2>
          )}
        </Card>
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">Withdrawal</h3>
          <Spacer height={10} />
          {isFetching ? (
            <Spinner />
          ) : (
            <h2 className="sm:text-xl text-sm text-danger">
              {formatBalance(totalWithdrawal)}
            </h2>
          )}
        </Card>
        <Card className="flex-1">
          <h3 className="sm:text-xl text-sm">This Month's Balance</h3>
          <Spacer height={10} />
          {isFetching ? (
            <Spinner />
          ) : (
            <h2 className="sm:text-xl text-sm">
              {formatBalance(thisMonthBalance)}
            </h2>
          )}
        </Card>
      </div>

      <Spacer height={30} />

      <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-4">
        <AccountTransactionFilterCard
          onFilterChanged={(value) => setCurrentMonth(value.month)}
        />
        <AccountTransactionsCard isLoading={isFetching} data={data} />
      </div>
    </div>
  );
};

export default AccountTransactions;
