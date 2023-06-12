import Card from "../../../commons/components/Card";
import { Popover2 } from "@blueprintjs/popover2";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import AccountMenu from "./AccountMenu";

const AccountBalance = () => {
  return (
    <Card className="text-white flex bg-main-800">
      <div className="flex-1">
        <p>Balance</p>
        <h3>Rp 1000,00</h3>
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
