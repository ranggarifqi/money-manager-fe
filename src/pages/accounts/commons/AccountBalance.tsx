import Card from "../../../commons/components/Card";
import { Popover2 } from "@blueprintjs/popover2";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import AccountMenu from "./AccountMenu";
import { useCurrencyFormatter } from "../../../commons/hooks/useCurrencyFormatter";
import { useAppSelector } from "../../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../../store/account/selectors";

interface Props {
  accountId: string;
}

const AccountBalance = ({ accountId }: Props) => {
  const account = useAppSelector((state) => sltAccountById(state, accountId));

  const { formatBalance } = useCurrencyFormatter();

  return (
    <Card className="text-white flex bg-main-800">
      <div className="flex-1">
        <p>Balance</p>
        <h3>{formatBalance(account?.balance)}</h3>
      </div>
      <div className="flex-none relative top-[-0.3rem]">
        <Popover2 content={<AccountMenu />}>
          <EllipsisHorizontalIcon className="w-8 h-8 text-white cursor-pointer" />
        </Popover2>
      </div>
    </Card>
  );
};

export default AccountBalance;
