import classNames from "classnames";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  className?: string;
  children?: ReactNode;
  width?: string;
  bgColor?: string;
}

const Card = ({ children, width, bgColor, className }: Props) => {
  const concattedClassName = classNames("rounded-lg p-4", className);

  return (
    <Container className={concattedClassName} width={width} bgColor={bgColor}>
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
