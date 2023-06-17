import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import SelectField, {
  SelectOption,
} from "../../../commons/components/form/SelectField";
import { EAccountType } from "../../../commons/models/accountType";
import { useEffect } from "react";
import Spacer from "../../../commons/components/Spacer";
import TextInput from "../../../commons/components/form/TextInput";
import Spinner from "../../../commons/components/Spinner";
import RippleButton from "../../../commons/components/RippleButton";
import { AnyCallback } from "../../../commons/types/general";

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

interface Props {
  isLoading?: boolean;
  onCancel?: AnyCallback;
  onSubmit?: (data: FormData) => void;
  submissionError?: string;
  initialValues?: FormData;
}

const AccountForm = ({
  isLoading,
  onCancel,
  onSubmit: onSubmitCallback,
  submissionError,
  initialValues,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    if (initialValues) {
      setValue("balance", initialValues.balance);
      setValue("accountType", initialValues.accountType);
      setValue("name", initialValues.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (onSubmitCallback) {
      onSubmitCallback(data);
    }
  });

  return (
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

export default AccountForm;
