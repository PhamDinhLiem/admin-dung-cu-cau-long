// Component ModalAdd.tsx
import React from "react";
import { ModalAppWrapper } from "./styled";
import ProductForm from "../product-form";

interface ModalAddProps {
  show: boolean;
  addType: string;
  setShow: () => void;
}

const ModalAdd = ({ show, setShow, addType }: ModalAddProps) => {
  if (!show) return null;

  return (
    <ModalAppWrapper>
      <div className="flex justify-between mb-4">
        <h1 className="text-[18px]">Mời bạn thêm {}</h1>
        <button onClick={setShow}>X</button>
      </div>
      {addType == "san-pham" && <ProductForm setShow={setShow} />}
    </ModalAppWrapper>
  );
};

export default ModalAdd;
