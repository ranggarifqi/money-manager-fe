import Spacer from "../../../commons/components/Spacer";
import SelectField, {
  SelectOption,
} from "../../../commons/components/form/SelectField";
import TextInput from "../../../commons/components/form/TextInput";
import { ETransactionType } from "../../../commons/models/transactionType";

const CategoryForm = () => {
  return (
    <form>
      <TextInput label="Category Name" />
      <Spacer height={10} />
      <SelectField label="Category Type" options={options} />
    </form>
  );
};

const options: SelectOption[] = [
  { label: ETransactionType.EXPENSE, value: ETransactionType.EXPENSE },
  { label: ETransactionType.INCOME, value: ETransactionType.INCOME },
];

export default CategoryForm;
