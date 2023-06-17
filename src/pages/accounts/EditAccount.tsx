import Card from "../../commons/components/Card";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import AccountForm from "./commons/AccountForm";

const EditAccount = () => {
  usePageTitle({
    title: "Edit Accounts",
    breadcrumb: ["Accounts", "Edit"],
  });

  const navigate = useNavigate();

  // if (isSuccess) {
  //   return <Navigate to="/accounts" />;
  // }

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <AccountForm
          onCancel={() => navigate("/accounts")}
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </Card>
    </div>
  );
};

export default EditAccount;
