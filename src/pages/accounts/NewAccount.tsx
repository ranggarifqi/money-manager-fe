import Card from "../../commons/components/Card";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { EAccountType } from "../../commons/models/accountType";
import { Navigate, useNavigate } from "react-router-dom";
import { useCreateAccountMutation } from "../../store/account/api";
import AccountForm from "./commons/AccountForm";

const NewAccount = () => {
  usePageTitle({
    title: "New Accounts",
    breadcrumb: [{ label: "Accounts" }, { label: "New" }],
  });

  const navigate = useNavigate();

  const [createAccount, { isLoading, error, isSuccess }] =
    useCreateAccountMutation();

  if (isSuccess) {
    return <Navigate to="/accounts" />;
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <AccountForm
          isLoading={isLoading}
          onCancel={() => navigate("/accounts")}
          onSubmit={(data) => {
            createAccount({
              accountTypeName: data.accountType as EAccountType,
              balance: data.balance,
              name: data.name,
            });
          }}
          submissionError={error as string}
        />
      </Card>
    </div>
  );
};

export default NewAccount;
