import { ReactNode } from "react";
import { styled } from "styled-components";

interface Props {
  children?: ReactNode;
  width?: string;
  bgColor?: string;
}

const Card = ({ children, width, bgColor }: Props) => {
  return (
    <Container className="rounded-lg p-4" width={width} bgColor={bgColor}>
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
