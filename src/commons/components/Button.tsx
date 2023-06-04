import classNames from "classnames";
import { ReactNode, useEffect } from "react";
import { initTE, Button as TWButton, Ripple } from "tw-elements";
import { IColor } from "../types/color";
import { getBGColor, getTextColor } from "../lib/colors";

interface OwnProps {
  children?: ReactNode;
  bgColor?: IColor;
  textColor?: IColor;
  block?: boolean;
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  OwnProps;

const RippleButton = ({
  children,
  bgColor,
  textColor,
  block = false,
  ...buttonProps
}: Props) => {
  useEffect(() => {
    initTE({ Button: TWButton, Ripple });
  }, []);

  const className = classNames(defaultClassNames, {
    "text-white": true,
    [getBGColor(bgColor)]: true,
    [getTextColor(textColor)]: true,
    "w-full": block,
  });

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className={className}
      {...buttonProps}
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
  "hover:bg-main-600",
  "hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "focus:bg-main-600",
  "focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "focus:outline-none focus:ring-0",
  "active:bg-main-700",
  "active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
  "dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]",
  "dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  "dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  "dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
);

export default RippleButton;
