"use client";

import Link from "next/link";
import { CommonContainerWrapper } from "./styled";
import { IoIosArrowForward } from "react-icons/io";

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
  return (
    <CommonContainerWrapper>
      <h1 className="mb-4">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-col gap-2 mt-7">
        {subCategories.map((category, index) => (
          <Link href={`/blog/personal/${removeBlank(category)}`} key={index} className="">
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
