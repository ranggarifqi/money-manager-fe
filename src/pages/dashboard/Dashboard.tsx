import RippleButton from "../../commons/components/RippleButton";
import { useFindAccountsMutation } from "../../store/account/api";

const Dashboard = () => {
  const [fetchAccount] = useFindAccountsMutation();

  return (
    <div>
      <RippleButton onClick={() => fetchAccount()}>Fetch account</RippleButton>
    </div>
  );
};

export default Dashboard;
