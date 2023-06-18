import { ReactNode } from "react";
import { modalMapping } from "./interfaces";

interface Props {
  children?: ReactNode;
}

const ModalProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      {modalMapping.map(({ component: Component, type }) => {
        return <Component key={type} />;
      })}
    </>
  );
};

export default ModalProvider;
