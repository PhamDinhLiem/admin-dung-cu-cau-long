import React from "react";
import { RecruitItemWrapper } from "./styled";

interface RecItemProps {
  item: {
    id: number;
    name: string;
    src: string;
    description: string;
  };
}

const RecruitBlogItem: React.FC<RecItemProps> = ({ item }) => {
  return (
    <RecruitItemWrapper className="flex flex-row wrapper">
      <img src={item.src} className="mainImg" />
      <div className="flex flex-col pt-2.5 pl-0.5">
        <div className="text-sm font-semibold title">{item.name}</div>
        <div className="text-xs description">{item.description}</div>
      </div>
    </RecruitItemWrapper>
  );
};
export default RecruitBlogItem;
