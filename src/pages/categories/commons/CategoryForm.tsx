import { useEffect, useState } from "react";
import Spacer from "../../../commons/components/Spacer";
import SelectField, {
  SelectOption,
} from "../../../commons/components/form/SelectField";
import TextInput from "../../../commons/components/form/TextInput";
import { useAppSelector } from "../../../commons/hooks/useAppSelector";
import { ETransactionType } from "../../../commons/models/transactionType";
import { useFindCategoriesQuery } from "../../../store/category/api";
import {
  sltExpenseCategoryRaw,
  sltIncomeCategoryRaw,
} from "../../../store/category/selectors";
import Spinner from "../../../commons/components/Spinner";

const CategoryForm = () => {
  const [parentOptions, setParentOptions] =
    useState<SelectOption[]>(defaultParentOptions);

  const allIncomeCategories = useAppSelector(sltIncomeCategoryRaw);
  const allExpenseCategories = useAppSelector(sltExpenseCategoryRaw);

  const { isSuccess, isLoading } = useFindCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      let additionalParentOptions: SelectOption[] = [];

      if (defaultTypeOptions === ETransactionType.EXPENSE) {
        additionalParentOptions = allExpenseCategories.map<SelectOption>(
          (v) => ({ label: v.name, value: v.id })
        );
      } else {
        additionalParentOptions = allIncomeCategories.map<SelectOption>(
          (v) => ({ label: v.name, value: v.id })
        );
      }

      setParentOptions([...defaultParentOptions, ...additionalParentOptions]);
    }
  }, [allExpenseCategories, allIncomeCategories, isSuccess]);

  return (
    <form>
      {isLoading ? (
        <Spinner />
      ) : (
        <SelectField label="Parent Category" options={parentOptions} />
      )}

      <Spacer height={10} />
      <TextInput label="Category Name" />
      <Spacer height={10} />
      <SelectField
        label="Category Type"
        options={typeOptions}
        initialValue={ETransactionType.EXPENSE}
      />
    </form>
  );
};

const defaultTypeOptions = ETransactionType.EXPENSE;

const typeOptions: SelectOption[] = [
  { label: ETransactionType.EXPENSE, value: ETransactionType.EXPENSE },
  { label: ETransactionType.INCOME, value: ETransactionType.INCOME },
];

const defaultParentOptions: SelectOption[] = [{ label: "None", value: "None" }];

export default CategoryForm;
