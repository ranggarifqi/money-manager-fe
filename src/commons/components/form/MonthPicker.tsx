import { forwardRef } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import TextInput from "./TextInput";

interface OwnProps {
  label?: string;
}
type Props = OwnProps & ReactDatePickerProps;

export const MonthPicker = ({ label, ...datePickerProps }: Props) => {
  return (
    <ReactDatePicker
      {...datePickerProps}
      dateFormat="MMM yyyy"
      showMonthYearPicker
      customInput={<CustomInput label={label} />}
      wrapperClassName="w-full"
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomInput = forwardRef<any, any>(
  ({ value, onClick, onChange, label }, ref) => (
    <TextInput
      label={label}
      onClick={onClick}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  )
);

export default MonthPicker;
