import RippleButton from "../../commons/components/RippleButton";
import { useFindAccountsMutation } from "../../store/account/api";
import { usePageTitle } from "../../commons/hooks/usePageTitle";

const Dashboard = () => {
  const [fetchAccount] = useFindAccountsMutation();
  usePageTitle({
    title: "Dashboard",
    breadcrumb: ["Dashboard"],
  });

  return (
    <div>
      <RippleButton onClick={() => fetchAccount()}>Fetch account</RippleButton>
    </div>
  );
};

export default Dashboard;
