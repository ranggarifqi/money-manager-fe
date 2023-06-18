import { useParams } from "react-router-dom";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../store/account/selectors";
import Card from "../../commons/components/Card";

const AccountTransactions = () => {
  const { accountId } = useParams();

  const account = useAppSelector((state) =>
    sltAccountById(state, accountId ?? "")
  );

  usePageTitle({
    title: `Account Transactions - ${account?.name}`,
    breadcrumb: ["Accounts", account?.name ?? ""],
  });

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <p>asdasd</p>
      </Card>
    </div>
  );
};

export default AccountTransactions;
