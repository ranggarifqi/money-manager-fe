import { useEffect, useState } from "react";
import * as yup from "yup";

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
import { AnyCallback } from "../../../commons/types/general";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RippleButton from "../../../commons/components/buttons/RippleButton";

const formSchema = yup
  .object({
    parentId: yup.string().required(),
    name: yup.string().required(),
    type: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof formSchema>;

interface Props {
  isLoading?: boolean;
  onCancel?: AnyCallback;
  onSubmit?: (data: FormData) => void;
  submissionError?: string;
  initialValues?: FormData;
}

const CategoryForm = ({
  isLoading,
  onCancel,
  onSubmit: onSubmitCallback,
  submissionError,
}: Props) => {
  const [parentOptions, setParentOptions] =
    useState<SelectOption[]>(defaultParentOptions);

  const allIncomeCategories = useAppSelector(sltIncomeCategoryRaw);
  const allExpenseCategories = useAppSelector(sltExpenseCategoryRaw);

  const { isSuccess, isLoading: isFindCategoriesLoading } =
    useFindCategoriesQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      type: ETransactionType.EXPENSE,
      parentId: NONE,
    },
  });

  const type = watch("type");

  useEffect(() => {
    if (isSuccess) {
      let additionalParentOptions: SelectOption[] = [];

      if (type === ETransactionType.EXPENSE) {
        additionalParentOptions = allExpenseCategories.map<SelectOption>(
          (v) => ({ label: v.name, value: v.id })
        );
      } else {
        additionalParentOptions = allIncomeCategories.map<SelectOption>(
          (v) => ({ label: v.name, value: v.id })
        );
      }

      setValue("parentId", NONE);
      setParentOptions([...defaultParentOptions, ...additionalParentOptions]);
    }
  }, [allExpenseCategories, allIncomeCategories, isSuccess, type, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      {isFindCategoriesLoading ? (
        <Spinner />
      ) : (
        <SelectField
          label="Parent Category"
          options={parentOptions}
          {...register("parentId")}
          errorText={errors.parentId?.message}
        />
      )}

      <Spacer height={10} />
      <TextInput
        label="Category Name"
        {...register("name")}
        errorText={errors.name?.message}
      />
      <Spacer height={10} />
      <SelectField
        label="Category Type"
        options={typeOptions}
        initialValue={ETransactionType.EXPENSE}
        {...register("type")}
        errorText={errors.type?.message}
      />
      <Spacer height={25} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex gap-x-3 w-full justify-end">
          <RippleButton bgColor="info" type="button" onClick={onCancel}>
            Cancel
          </RippleButton>
          <RippleButton type="submit">Save</RippleButton>
        </div>
      )}
      {!!submissionError && (
        <p className="text-danger text-sm">{submissionError}</p>
      )}
    </form>
  );
};

const typeOptions: SelectOption[] = [
  { label: ETransactionType.EXPENSE, value: ETransactionType.EXPENSE },
  { label: ETransactionType.INCOME, value: ETransactionType.INCOME },
];

const NONE = "None";

const defaultParentOptions: SelectOption[] = [{ label: NONE, value: NONE }];

export default CategoryForm;
