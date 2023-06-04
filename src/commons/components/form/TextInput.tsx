import classNames from "classnames";
import { useEffect } from "react";
import { initTE, Input } from "tw-elements";

interface Props {
  label?: string;
  errorText?: string;
}

const TextInput = ({ label = "Label", errorText }: Props) => {
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
      <input type="text" className={inputClassNames} />
      {errorText && <span className="text-sm text-danger">{errorText}</span>}
    </label>
  );
};

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
