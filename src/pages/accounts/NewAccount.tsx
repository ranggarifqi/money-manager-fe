import { useForm } from "react-hook-form";
import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import TextInput from "../../commons/components/form/TextInput";
import { usePageTitle } from "../../commons/hooks/usePageTitle";

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
      <Card width="50%">
        <form onSubmit={onSubmit}>
          <TextInput label="Account Name" {...register("name")} />
          <Spacer height={15} />
          <TextInput label="Account Balance" {...register("balance")} />
        </form>
      </Card>
    </div>
  );
};

export default NewAccount;
