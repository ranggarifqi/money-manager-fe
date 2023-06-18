import classNames from "classnames";
import { ReactNode, useEffect } from "react";
import { initTE, Button as TWButton, Ripple } from "tw-elements";
import { IBackgroundColor, ITextColor } from "../types/color";
import { buttonThemes } from "../lib/buttons";

interface OwnProps {
  children?: ReactNode;
  bgColor?: IBackgroundColor;
  textColor?: ITextColor;
  block?: boolean;
  isDisabled?: boolean;
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  OwnProps;

const RippleButton = ({
  children,
  bgColor = "primary",
  textColor = "light",
  block = false,
  className,
  isDisabled,
  ...buttonProps
}: Props) => {
  useEffect(() => {
    initTE({ Button: TWButton, Ripple });
  }, []);

  const btnClassName = classNames(
    defaultClassNames,
    {
      "w-full": block,
      "disabled:opacity-30": isDisabled,
    },
    buttonThemes.bg[bgColor],
    buttonThemes.textColor[textColor],
    className
  );

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className={btnClassName}
      {...buttonProps}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

const defaultClassNames = classNames(
  "inline-block",
  "rounded",
  "px-6",
  "pb-2",
  "pt-2.5",
  "text-xs",
  "font-medium",
  "uppercase",
  "leading-normal",
  "shadow-[0_4px_9px_-4px_#3b71ca]",
  "transition duration-150 ease-in-out",
  "hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "focus:outline-none focus:ring-0",
  "active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]",
  "dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  "dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  "dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
);

export default RippleButton;
