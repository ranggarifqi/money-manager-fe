import { useTheme } from "styled-components";
import Card from "../../../commons/components/Card";
import Spacer from "../../../commons/components/Spacer";
import RecentTransaction from "./RecentTransaction";
import { Link } from "react-router-dom";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
}

const AccountCard = ({ title }: Props) => {
  const theme = useTheme();

  return (
    <Card className="">
      <div className="flex flex-col items-center">
        <div className="relative top-[-2rem] w-3/4 h-6">
          <div className="h-12 bg-main rounded-lg flex items-center justify-center px-3">
            <h2 className="text-light-shades truncate">{title}</h2>
          </div>
        </div>
        <div className="w-full mt-2">
          <Card bgColor={theme?.colors.main[800]} className="text-white flex">
            <div className="flex-1">
              <p>Balance</p>
              <h3>Rp 1000,00</h3>
            </div>
            <div className="flex-none relative top-[-0.3rem]">
              <EllipsisHorizontalIcon className="w-8 h-8 text-white cursor-pointer" />
            </div>
          </Card>
          <Spacer height={20} />
          <RecentTransaction />
          <Spacer height={20} />
          <Link to="/accounts/id/transactions" className="text-right block">
            See All Transactions
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AccountCard;
