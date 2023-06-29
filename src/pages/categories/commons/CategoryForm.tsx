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
import { NONE } from "./constants";

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
  initialValues,
}: Props) => {
  const allIncomeCategories = useAppSelector(sltIncomeCategoryRaw);
  const allExpenseCategories = useAppSelector(sltExpenseCategoryRaw);

  const { isLoading: isFindCategoriesLoading } = useFindCategoriesQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      type: initialValues?.type ?? ETransactionType.EXPENSE,
      parentId: initialValues?.parentId ?? NONE,
      name: initialValues?.name ?? "",
    },
  });

  /** Register */
  const registeredParentId = register("parentId");
  const registeredCategoryType = register("type");

  const type = watch("type");
  const parentId = watch("parentId");

  const onChangeTypeSideEffect = () => {
    setValue("parentId", NONE);
  };

  const onSubmit = handleSubmit((data) => {
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  });

  if (isFindCategoriesLoading) {
    return <Spinner />;
  }

  const expenseParentOptions = allExpenseCategories.map<SelectOption>((v) => ({
    label: v.name,
    value: v.id,
  }));

  const incomeParentOptions = allIncomeCategories.map<SelectOption>((v) => ({
    label: v.name,
    value: v.id,
  }));

  return (
    <form onSubmit={onSubmit}>
      {type === ETransactionType.EXPENSE ? (
        <SelectField
          label="Parent Category"
          options={[...defaultParentOptions, ...expenseParentOptions]}
          {...registeredParentId}
          errorText={errors.parentId?.message}
          initialValue={parentId}
        />
      ) : (
        <SelectField
          label="Parent Category"
          options={[...defaultParentOptions, ...incomeParentOptions]}
          {...registeredParentId}
          errorText={errors.parentId?.message}
          initialValue={parentId}
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
        initialValue={type}
        {...registeredCategoryType}
        errorText={errors.type?.message}
        onChange={(e) => {
          registeredCategoryType.onChange(e);
          onChangeTypeSideEffect();
        }}
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
        <>
          <Spacer height={10} />
          <p className="text-danger text-sm">{submissionError}</p>
        </>
      )}
    </form>
  );
};

const typeOptions: SelectOption[] = [
  { label: ETransactionType.EXPENSE, value: ETransactionType.EXPENSE },
  { label: ETransactionType.INCOME, value: ETransactionType.INCOME },
];

const defaultParentOptions: SelectOption[] = [{ label: NONE, value: NONE }];

export default CategoryForm;
