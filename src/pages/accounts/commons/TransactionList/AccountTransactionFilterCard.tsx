import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Card from "../../../../commons/components/Card";
import RippleButton from "../../../../commons/components/buttons/RippleButton";
import Spacer from "../../../../commons/components/Spacer";
import MonthPicker from "../../../../commons/components/form/MonthPicker";

export interface FilterFormData {
  month: Date;
}

interface Props {
  onFilterChanged?: (value: FilterFormData) => void;
  initialValues?: FilterFormData;
}

const AccountTransactionFilterCard = ({
  onFilterChanged,
  initialValues,
}: Props) => {
  const { control, handleSubmit } = useForm<FilterFormData>({
    defaultValues: {
      month: initialValues?.month ?? new Date(),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit: SubmitHandler<FilterFormData> = onFilterChanged ?? (() => {});

  return (
    <Card className="md:sticky md:top-[6rem]">
      <h2>Filter</h2>
      <Spacer height={10} />
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="month"
          control={control}
          render={({ field }) => {
            return (
              <MonthPicker
                label="Select Month"
                selected={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            );
          }}
        />
        <Spacer height={10} />
        <RippleButton type="submit" className="w-36 self-center">
          Apply Filter
        </RippleButton>
      </form>
    </Card>
  );
};

export default AccountTransactionFilterCard;
