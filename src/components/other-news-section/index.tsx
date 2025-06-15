"use client";

import BlockBorderTop from "../block-border-top";
import { NewDetail } from "../new-detail-bar";
import { OtherNewsSectionWrapper } from "./styled";
import Link from "next/link";

interface OtherNewsSectionProps {
  otherNewList: NewDetail[];
}

const OtherNewsSection = ({ otherNewList }: OtherNewsSectionProps) => {
  return (
    <OtherNewsSectionWrapper>
      <div className="w-3/4 mb-w-full">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">More in Technology</p>
          <div className="grid grid-cols-3 justify-between gap-5 grid-2">
            {otherNewList.map((_new: NewDetail, i: any) => (
              <div key={i} className="flex flex-col gap-2">
                <Link href={`/blog/personal/${_new.subcategory}/${_new.slug}`}>
                  <img src={_new.featuredImage.url} alt={i} className="h-[200px] w-full" />
                  <h1 className="text-[16px] font-light! ">{_new.title}</h1>
                </Link>
              </div>
            ))}
          </div>
        </BlockBorderTop>
      </div>
      <div className="w-1/4 mb-w-full">
        <BlockBorderTop pt="14px">
          <p className="font-semibold mb-8">Trending in Miralce</p>
          {otherNewList.map((_new: NewDetail, i: any) => (
            <div key={i} className="flex flex-col gap-2 py-3 border-t-2 hover:text-gray-400 ">
              <h1 className="text-[18px]  cursor-pointer">{_new.title}</h1>
            </div>
          ))}
        </BlockBorderTop>
      </div>
    </OtherNewsSectionWrapper>
  );
};

export default OtherNewsSection;
