"use client";

import React from "react";
import { BlogSliderWrapper, SliderContentVer1Wrapper, SliderContentVer2Wrapper } from "./styled";
import CarouselCustom from "../carousel";

interface SliderProps {
  page?: string;
}

const fakeDataNews = [
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content:
      "Long-term relationships with borrowers and deal sources who rely on our deep industry knowledge and in-house legal expertise",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
  },
];

export const SliderContentVer1 = () => {
  return (
    <BlogSliderWrapper>
      <SliderContentVer1Wrapper className="w-full">
        <CarouselCustom>
          {fakeDataNews.map((news, index) => (
            <div className="flex flex-col pt-20 gap-2 h-[300px]" key={index}>
              <h1 className="text-white text-[32px]">{news.title}</h1>
              <hr />
              <h4 className="text-white">{news.content}</h4>
            </div>
          ))}
        </CarouselCustom>
      </SliderContentVer1Wrapper>
    </BlogSliderWrapper>
  );
};

//Slider cho các trang about
export const SliderContentVer2 = ({ page }: SliderProps) => {
  return (
    <BlogSliderWrapper>
      <SliderContentVer2Wrapper className="flex flex-col pt-20 gap-4 h-[300px]">
        <h1 className="text-white text-[32px]">BlackRock TCP Capital Corp. (Nasdaq: TCPC)</h1>
        <hr />
        <h1 className="text-white ">{page}</h1>
      </SliderContentVer2Wrapper>
    </BlogSliderWrapper>
  );
};
