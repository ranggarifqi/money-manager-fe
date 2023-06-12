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
import { useNavigate } from "react-router-dom";

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
    balance: yup.number().positive().required(),
  })
  .required();

type FormData = yup.InferType<typeof formSchema>;

const NewAccount = () => {
  usePageTitle({
    title: "New Accounts",
    breadcrumb: ["Accounts", "New"],
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
          <div className="flex gap-x-3 w-full justify-end">
            <RippleButton bgColor="info" type="button" onClick={() => navigate('/accounts')}>
              Cancel
            </RippleButton>
            <RippleButton type="submit">Save</RippleButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewAccount;
