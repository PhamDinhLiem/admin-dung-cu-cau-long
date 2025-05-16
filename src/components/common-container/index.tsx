"use client";

import Link from "next/link";
import { CommonContainerWrapper } from "./styled";
import { IoIosArrowForward } from "react-icons/io";

interface CommmonContainerProps {
  title: string;
  description: string;
  subCategorys: string[];
}

//components này dùng chung cho 3 layout business, lifestyle, lifestyle
const CommonContainer = ({ title, subCategorys, description }: CommmonContainerProps) => {
  return (
    <CommonContainerWrapper>
      <h1 className="mb-4">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-col gap-2 mt-7">
        {subCategorys.map((category, index) => (
          <Link href={"/"} key={index} className="">
            <div className="flex justify-between items-center py-2 border-b border-black common-block">
              <p className="font-semibold">{category}</p>
              <div className="rounded-full px-1 py-1 text-orange-600 border icon-section">
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </CommonContainerWrapper>
  );
};
export default CommonContainer;
