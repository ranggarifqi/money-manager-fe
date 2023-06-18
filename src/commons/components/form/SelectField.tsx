import classNames from "classnames";
import React, { useEffect } from "react";
import { Select, initTE } from "tw-elements";
import Spacer from "../Spacer";

export interface SelectOption {
  label: string;
  value: string;
}

interface OwnProps {
  label?: string;
  errorText?: string;
  options: SelectOption[];
  initialValue?: string;
}

type Props = OwnProps &
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;

const SelectField = React.forwardRef<HTMLSelectElement, Props>(
  ({ label, errorText, options, initialValue, ...rest }: Props, ref) => {
    useEffect(() => {
      initTE({ Select });
    }, []);

    useEffect(() => {
      const selectEl = document.getElementById("select-field");
      if (selectEl) {
        const select = Select.getInstance(selectEl);
        select.setValue(initialValue);
      }
    }, [initialValue]);

    const inputClassNames = classNames(defaultInputClassNames, {
      "ring-1 ring-danger outline-0": !!errorText,
      "focus:outline-0 focus:border-main focus:ring-1 focus:ring-main":
        !errorText,
    });

    const labelClassName = classNames(
      "block text-sm font-medium text-dark-shades",
      {
        "text-danger": !!errorText,
      }
    );

    return (
      <label className="block">
        <span className={labelClassName}>{label}</span>
        <Spacer height={4} />
        <select
          ref={ref}
          id="select-field"
          data-te-select-init
          data-te-class-select-input={inputClassNames}
          data-te-input-focused
          {...rest}
        >
          {options.map((v) => {
            return (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            );
          })}
        </select>
        {errorText && <span className="text-sm text-danger">{errorText}</span>}
      </label>
    );
  }
);

const defaultInputClassNames = classNames(
  "block",
  "w-full",
  "h-10",
  "bg-white",
  "border border-slate-300",
  "rounded-md",
  "text-sm",
  "shadow-sm",
  "placeholder-slate-400",
  "transition ease-in-out duration-300",
  "cursor-pointer"
);

export default SelectField;
