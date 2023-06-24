import { usePageTitle } from "../../commons/hooks/usePageTitle";

const Dashboard = () => {
  usePageTitle({
    title: "Dashboard",
    breadcrumb: [{ label: "Dashboard" }],
  });

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

export default Dashboard;
