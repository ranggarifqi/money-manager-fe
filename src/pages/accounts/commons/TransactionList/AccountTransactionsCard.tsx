import Card from "../../../../commons/components/Card";
import Spacer from "../../../../commons/components/Spacer";
import Spinner from "../../../../commons/components/Spinner";
import { ITransactionWithAssociation } from "../../../../commons/models/transaction";
import AccountTransactionList from "./AccountTransactionList";

interface Props {
  isLoading?: boolean;
  data?: ITransactionWithAssociation[];
}

const AccountTransactionsCard = ({ isLoading, data = [] }: Props) => {
  return (
    <Card className="">
      <h2>Transactions</h2>
      <Spacer height={10} />
      {isLoading ? <Spinner /> : <AccountTransactionList data={data} />}
    </Card>
  );
};

export default AccountTransactionsCard;
