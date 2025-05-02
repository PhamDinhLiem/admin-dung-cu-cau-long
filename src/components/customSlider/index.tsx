"use client";

import React from "react";
import { BlogSliderWrapper, SliderContentVer1Wrapper } from "./styled";
import CarouselCustom from "../carousel";

interface SliderProps {
  sliderType: string;
}

const FakeDataNews = [
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

const handleSliderContent = (sliderType: string) => {
  switch (sliderType) {
    case "ver1":
      return <SliderContentVer1 />;
    default:
      return null;
  }
};

const BlogSlider: React.FC<SliderProps> = ({ sliderType }) => {
  return <BlogSliderWrapper>{handleSliderContent(sliderType)}</BlogSliderWrapper>;
};

export default BlogSlider;

const SliderContentVer1 = () => {
  return (
    <SliderContentVer1Wrapper>
      <CarouselCustom>
        {FakeDataNews.map((news, index) => (
          <div key={index}>
            <h1 className="text-white">{news.title}</h1>
            <hr />
            <h4 className="text-white">{news.content}</h4>
          </div>
        ))}
      </CarouselCustom>
    </SliderContentVer1Wrapper>
  );
};
