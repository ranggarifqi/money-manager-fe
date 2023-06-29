import classNames from "classnames";
import { ReactNode } from "react";
import { AnyCallback } from "../types/general";
import { styled } from "styled-components";

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: AnyCallback;
  bgColor?: string;
  width?: string;
}

/**
 *
 * Note:
 *  * Don't use tailwind's bg- class.
 */
const Card = ({ children, className, onClick, bgColor, width }: Props) => {
  const concattedClassName = classNames(className);

  const isUsingTWWidth = !!className?.match("w-");

  return (
    <Container
      className={concattedClassName}
      onClick={onClick}
      $bgColor={bgColor}
      $width={width}
      $shouldUseWidth={!isUsingTWWidth}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  $bgColor?: string;
  $width?: string;
  $shouldUseWidth?: boolean;
}>`
  border-radius: 0.5rem;
  padding: 1rem;
  ${(props) => {
    if (props.$shouldUseWidth) {
      return `width: ${props.$width ?? "100%"};`;
    }
  }}
  background-color: ${(props) =>
    props.$bgColor ?? props.theme.colors["light-shades"]};
`;

export default Card;
