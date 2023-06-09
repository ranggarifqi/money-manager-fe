import Card from "../../../commons/components/Card";
import Spacer from "../../../commons/components/Spacer";
import RecentTransaction from "./RecentTransaction";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import { useAppSelector } from "../../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../../store/account/selectors";

interface Props {
  accountId: string;
}

const AccountCard = ({ accountId }: Props) => {
  const account = useAppSelector((state) => sltAccountById(state, accountId));
  return (
    <Card>
      <div className="flex flex-col items-center h-full">
        <div className="relative top-[-2.5rem] w-3/4">
          <div className="py-2 h-16 bg-main rounded-lg flex flex-col items-center justify-center px-3">
            <h2 className="text-light-shades truncate">{account?.name}</h2>
            {!!account?.accountTypeName && (
              <h4 className="text-light-shades truncate">
                {account.accountTypeName}
              </h4>
            )}
          </div>
        </div>
        <div className="relative w-full mt-[-1.5rem] h-full flex flex-col">
          <AccountBalance accountId={accountId} />
          <Spacer height={20} />
          <RecentTransaction accountId={accountId} />
          <Spacer height={20} />
          <Link
            to={`/accounts/${accountId}/transactions`}
            className="text-right block"
          >
            See All Transactions
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AccountCard;
