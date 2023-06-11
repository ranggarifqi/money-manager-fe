import Card from "../../commons/components/Card";
import Spacer from "../../commons/components/Spacer";
import TextInput from "../../commons/components/form/TextInput";
import { usePageTitle } from "../../commons/hooks/usePageTitle";

const NewAccount = () => {
  usePageTitle({
    title: "New Accounts",
    breadcrumb: ["Accounts", "New"],
  });

  return (
    <div className="flex justify-center">
      <Card width="50%">
        <form>
          <TextInput label="Account Name" />
          <Spacer height={15} />
          <TextInput label="Account Balance" />
        </form>
      </Card>
    </div>
  );
};

export default NewAccount;
