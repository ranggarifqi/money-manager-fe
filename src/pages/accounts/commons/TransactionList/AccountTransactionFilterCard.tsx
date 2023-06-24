import Card from "../../../../commons/components/Card";
import RippleButton from "../../../../commons/components/RippleButton";
import Spacer from "../../../../commons/components/Spacer";
import MonthPicker from "../../../../commons/components/form/MonthPicker";

const AccountTransactionFilterCard = () => {
  return (
    <Card className="">
      <h2>Filter</h2>
      <Spacer height={10} />
      <form className="flex flex-col">
        <MonthPicker />
        <Spacer height={10} />
        <RippleButton className="w-36 self-center">Apply Filter</RippleButton>
      </form>
    </Card>
  );
};

export default AccountTransactionFilterCard;
