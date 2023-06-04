import { styled } from "styled-components";

interface Props {
  height?: number;
}

const Spacer = ({ height = 50 }: Props) => {
  return <Container height={height} />;
};

const Container = styled.div<{ height?: number }>`
  height: ${(props) => (props.height ? props.height + "px" : "0px")};
`;

export default Spacer;
