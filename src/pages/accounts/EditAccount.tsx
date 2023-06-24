import Card from "../../commons/components/Card";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AccountForm from "./commons/AccountForm";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltAccountById } from "../../store/account/selectors";
import RippleButton from "../../commons/components/RippleButton";
import Spacer from "../../commons/components/Spacer";
import { useUpdateAccountByIdMutation } from "../../store/account/api";

const EditAccount = () => {
  usePageTitle({
    title: "Edit Accounts",
    breadcrumb: [{ label: "Accounts", link: "/accounts" }, { label: "Edit" }],
  });

  const navigate = useNavigate();
  const { accountId } = useParams();

  const account = useAppSelector((state) =>
    sltAccountById(state, accountId ?? "")
  );

  const [updateAccountById, { isSuccess, isLoading, error }] =
    useUpdateAccountByIdMutation();

  if (isSuccess) {
    return <Navigate to="/accounts" />;
  }

  return (
    <div className="flex justify-center">
      {!account ? (
        <div className="flex flex-col justify-center">
          <p>No Account Was Found</p>
          <Spacer height={10} />
          <RippleButton bgColor="info" onClick={() => navigate("/accounts")}>
            Go Back
          </RippleButton>
        </div>
      ) : (
        <Card className="w-full lg:w-6/12 md:w-8/12">
          <AccountForm
            onCancel={() => navigate("/accounts")}
            onSubmit={(data) => {
              updateAccountById({
                // accountId must not be null at this point
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                accountId: accountId!,
                payload: {
                  accountTypeName: data.accountType,
                  balance: data.balance,
                  name: data.name,
                },
              });
            }}
            initialValues={{
              accountType: account.accountTypeName,
              name: account.name,
              balance: account.balance,
            }}
            isLoading={isLoading}
            submissionError={error as string}
          />
        </Card>
      )}
    </div>
  );
};

export default EditAccount;
