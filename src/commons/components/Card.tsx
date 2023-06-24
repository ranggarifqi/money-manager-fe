import classNames from "classnames";
import { ReactNode } from "react";
import { AnyCallback } from "../types/general";
import { styled } from "styled-components";

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: AnyCallback;
  bgColor?: string;
}

/**
 * 
 * Note:
 *  * Don't use tailwind's bg- class.
 */
const Card = ({ children, className, onClick, bgColor }: Props) => {
  const concattedClassName = classNames(className);

  return (
    <Container
      className={concattedClassName}
      onClick={onClick}
      $bgColor={bgColor}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{ $bgColor?: string }>`
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  background-color: ${(props) =>
    props.$bgColor ?? props.theme.colors["light-shades"]};
`;

export default Card;
