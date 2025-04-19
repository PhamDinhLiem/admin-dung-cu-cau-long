import React from "react";
import { datalist } from "./Data/datalist";
import RecruitBlogItem from "../rec-item";
import { RecruitmentContentContainer } from "./styled";

const RecruitContent: React.FC = () => {
  return (
    <RecruitmentContentContainer className="grid_layout">
      {datalist.map((item) => (
        <RecruitBlogItem key={item.id} item={item} />
      ))}
    </RecruitmentContentContainer>
  );
};
export default RecruitContent;
