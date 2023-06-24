import Card from "../../../../commons/components/Card";
import Spacer from "../../../../commons/components/Spacer";
import AccountTransactionList from "./AccountTransactionList";

const AccountTransactionsCard = () => {
  return (
    <Card className="">
      <h2>Transactions</h2>
      <Spacer height={10} />
      <AccountTransactionList />
    </Card>
  );
};

export default AccountTransactionsCard;
