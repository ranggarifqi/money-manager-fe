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

const AccountTransactions = () => {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const account = useAppSelector((state) =>
    sltAccountById(state, accountId ?? "")
  );

  usePageTitle({
    title: `Account Transactions - ${account?.name}`,
    breadcrumb: ["Accounts", account?.name ?? "", "Transactions"],
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
