import { useForm } from "react-hook-form";
import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import TextInput from "../../commons/components/form/TextInput";
import { usePageTitle } from "../../commons/hooks/usePageTitle";
import SelectField, {
  SelectOption,
} from "../../commons/components/form/SelectField";
import { EAccountType } from "../../commons/models/accountType";
import RippleButton from "../../commons/components/RippleButton";

const options: SelectOption[] = Object.values(EAccountType).map((v) => {
  return {
    label: v,
    value: v,
  };
});

const NewAccount = () => {
  usePageTitle({
    title: "New Accounts",
    breadcrumb: ["Accounts", "New"],
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

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
          />
          <Spacer height={15} />
          <TextInput label="Account Name" {...register("name")} />
          <Spacer height={15} />
          <TextInput label="Account Balance" {...register("balance")} />
          <Spacer height={25} />
          <div className="flex gap-x-3 w-full justify-end">
            <RippleButton bgColor="info" type="button">
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
