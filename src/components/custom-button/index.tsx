import { ReactNode } from "react";
import { CustomButtonWrapper } from "./styled";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: Function;
  classname?: String;
}

const CustomButton = ({ children, classname, onClick }: CustomButtonProps) => {
  return (
    <CustomButtonWrapper
      onClick={() => {
        onClick;
      }}
      className={`${classname}`}
    >
      {children}
    </CustomButtonWrapper>
  );
};
export default CustomButton;
