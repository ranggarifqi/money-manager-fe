import { usePageTitle } from "../../commons/hooks/usePageTitle";

const Dashboard = () => {
  usePageTitle({
    title: "Dashboard",
    breadcrumb: ["Dashboard"],
  });

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

export default Dashboard;
