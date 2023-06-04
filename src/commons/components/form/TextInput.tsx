import classNames from "classnames";
import { useEffect } from "react";
import { initTE, Input } from "tw-elements";

interface Props {
  label?: string;
}

const TextInput = ({ label = "Label" }: Props) => {
  useEffect(() => {
    initTE({ Input });
  }, []);

  return (
    <label className="block">
      <span className="block text-sm font-medium text-dark-shades">{label}</span>
      <input
        type="text"
        className={defaultClassNames}
      />
    </label>
  );
};

const defaultClassNames = classNames(
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
  "focus:outline-none focus:border-main focus:ring-1 focus:ring-main",
  "transition ease-in-out duration-300"
)

export default TextInput;
