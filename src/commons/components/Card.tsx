import classNames from "classnames";
import { ReactNode } from "react";
import { AnyCallback } from "../types/general";

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: AnyCallback;
}

const Card = ({ children, className, onClick }: Props) => {
  const concattedClassName = classNames("rounded-lg p-4 w-full bg-light-shades", className);

  return (
    <div className={concattedClassName} onClick={onClick}>
      {children}
    </div>
  );
};
export default Card;
