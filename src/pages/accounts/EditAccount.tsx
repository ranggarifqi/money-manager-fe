import { useForm } from "react-hook-form";
import * as yup from "yup";

import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import TextInput from "../../commons/components/form/TextInput";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import SelectField, {
  SelectOption,
} from "../../commons/components/form/SelectField";
import { EAccountType } from "../../commons/models/accountType";
import RippleButton from "../../commons/components/RippleButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";
import { useCreateAccountMutation } from "../../store/account/api";
import Spinner from "../../commons/components/Spinner";

const options: SelectOption[] = Object.values(EAccountType).map((v) => {
  return {
    label: v,
    value: v,
  };
});

const formSchema = yup
  .object({
    accountType: yup.string<keyof typeof EAccountType>().required(),
    name: yup.string().required(),
    balance: yup.number().required(),
  })
  .required();

type FormData = yup.InferType<typeof formSchema>;

const EditAccount = () => {
  usePageTitle({
    title: "Edit Accounts",
    breadcrumb: ["Accounts", "Edit"],
  });

  const navigate = useNavigate();

  const [
    createAccount,
    { isLoading, isError: isSubmissionError, error, isSuccess },
  ] = useCreateAccountMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    createAccount({
      accountTypeName: data.accountType as EAccountType,
      balance: data.balance,
      name: data.name,
    });
  });

  if (isSuccess) {
    return <Navigate to="/accounts" />;
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-6/12 md:w-8/12">
        <form onSubmit={onSubmit}>
          <SelectField
            label="Account Type"
            options={options}
            {...register("accountType")}
            errorText={errors.accountType?.message}
          />
          <Spacer height={15} />
          <TextInput
            label="Account Name"
            {...register("name")}
            errorText={errors.name?.message}
          />
          <Spacer height={15} />
          <TextInput
            label="Account Balance"
            {...register("balance")}
            errorText={errors.balance?.message}
          />
          <Spacer height={25} />
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="flex gap-x-3 w-full justify-end">
              <RippleButton
                bgColor="info"
                type="button"
                onClick={() => navigate("/accounts")}
              >
                Cancel
              </RippleButton>
              <RippleButton type="submit">Save</RippleButton>
            </div>
          )}
          {isSubmissionError && (
            <p className="text-danger text-sm">{error as string}</p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default EditAccount;
