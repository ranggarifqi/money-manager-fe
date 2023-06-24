import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import TextInput from "./TextInput";

export const MonthPicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomInput = forwardRef<any, any>(({ value, onClick }, ref) => (
    <TextInput label="Select Month" onClick={onClick} ref={ref} value={value} />
  ));

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => !!date && setStartDate(date)}
      dateFormat="MMM yyyy"
      showMonthYearPicker
      customInput={<CustomInput />}
      wrapperClassName="w-full"
    />
  );
};

export default MonthPicker;
