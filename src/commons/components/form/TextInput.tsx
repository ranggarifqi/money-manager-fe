import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import { initTE, Input } from "tw-elements";

interface OwnProps {
  label?: string;
  errorText?: string;
}

type Props = OwnProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ errorText, label, onChange, onBlur, name }: Props, ref) => {
    useEffect(() => {
      initTE({ Input });
    }, []);

    const inputClassNames = classNames(defaultInputClassNames, {
      "ring-1 ring-danger outline-0": !!errorText,
      "focus:outline-none focus:border-main focus:ring-1 focus:ring-main":
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
        <input
          ref={ref}
          type="text"
          className={inputClassNames}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorText && <span className="text-sm text-danger">{errorText}</span>}
      </label>
    );
  }
);

const defaultInputClassNames = classNames(
  "mt-1",
  "block",
  "w-full",
  "px-3 py-2",
  "bg-white",
  "border border-slate-300",
  "rounded-md",
  "text-sm",
  "shadow-sm",
  "placeholder-slate-400",
  "transition ease-in-out duration-300"
);

export default TextInput;
