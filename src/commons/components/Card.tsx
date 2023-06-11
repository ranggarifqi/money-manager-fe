import classNames from "classnames";
import { ReactNode } from "react";
import { styled } from "styled-components";
import { AnyCallback } from "../types/general";

interface Props {
  className?: string;
  children?: ReactNode;
  width?: string;
  bgColor?: string;
  onClick?: AnyCallback;
}

const Card = ({ children, width, bgColor, className, onClick }: Props) => {
  const concattedClassName = classNames("rounded-lg p-4", className);

  return (
    <Container
      className={concattedClassName}
      width={width}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{ width?: string; bgColor?: string }>`
  background-color: ${(props) =>
    props.bgColor ?? props.theme.colors["light-shades"]};
  width: ${(props) => props.width ?? "100%"};
`;

export default Card;
