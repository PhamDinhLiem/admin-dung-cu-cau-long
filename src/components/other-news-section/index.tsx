"use client";

import BlockBorderTop from "../block-border-top";
import { NewDetail } from "../new-detail-bar";
import { OtherNewsSectionWrapper } from "./styled";

interface OtherNewsSectionProps {
  otherNewList: NewDetail[];
}

const OtherNewsSection = ({ otherNewList }: OtherNewsSectionProps) => {
  return (
    <OtherNewsSectionWrapper>
      <div className="w-3/4">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">More in Technology</p>
          <div className="grid grid-cols-3 justify-between gap-5">
            {otherNewList.map((_new: NewDetail, i: any) => (
              <div key={i}>
                <img src={_new.featuredImage.url} alt={i} className="h-[150px] w-full" />
                <h1 className="text-[16px] font-light! ">{_new.title}</h1>
              </div>
            ))}
          </div>
        </BlockBorderTop>
      </div>
      <div className="w-1/4">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">Trending in Miralce</p>
        </BlockBorderTop>
      </div>
    </OtherNewsSectionWrapper>
  );
};

export default OtherNewsSection;
