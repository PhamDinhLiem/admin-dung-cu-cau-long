"use client";

import { CommonContainerWrapper } from "./styled";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import AppContext from "@/contexts/app";

interface CommmonContainerProps {
  category: Category;
}

interface Category {
  title: string;
  description: string;
  subCategories: string[];
}

//Hàm xóa khoảng trống
const removeBlank = (str: string) => {
  return str.replace(" ", "");
};

//components này dùng chung cho 3 layout business, lifestyle, lifestyle
const CommonContainer: React.FC<CommmonContainerProps> = ({ category }) => {
  const { title, description, subCategories } = category;
  const { setPersonalState } = useContext(AppContext);
  const router = useRouter();

  const handleNavigate = (category: string, subCategories: string) => {
    setPersonalState(category);
    router.push(`/blog/personal/${removeBlank(subCategories)}`);
  };
  return (
    <CommonContainerWrapper>
      <h1 className="mb-4">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-col gap-2 mt-7">
        {subCategories.map((subcategory, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-black common-block"
            onClick={() => {
              handleNavigate(title, subcategory);
            }}
          >
            <p className="font-semibold capitalize">{subcategory}</p>
            <div className="rounded-full px-1 py-1 text-orange-600 border icon-section">
              <IoIosArrowForward />
            </div>
          </div>
        ))}
      </div>
    </CommonContainerWrapper>
  );
};
export default CommonContainer;
