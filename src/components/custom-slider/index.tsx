"use client";

import { BlogSliderWrapper, SliderContentVer1Wrapper, SliderContentVer2Wrapper } from "./styled";
import CarouselCustom from "../carousel";

interface SliderProps {
  page?: string;
}

const sliderDataNews = [
  {
    title: "Miracle TCP Capital Corp. (Nasdaq: TCPC)",
    content:
      "Long-term relationships with borrowers and deal sources who rely on our deep industry knowledge and in-house legal expertise",
  },
  {
    title: "Miracle TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
  },
  {
    title: "Miracle TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
  },
];

export const SliderContentVer1 = () => {
  return (
    <BlogSliderWrapper>
      <SliderContentVer1Wrapper className="w-full">
        <CarouselCustom>
          {sliderDataNews.map((news, index) => (
            <div className="flex flex-col pt-20 gap-2 h-[300px] mobile-implement" key={index}>
              <h1 className="text-white text-[40px]">{news.title}</h1>
              <hr />
              <h1 className="text-white text-[32px] subtitle">{news.content}</h1>
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
      <SliderContentVer2Wrapper className="flex flex-col pt-20 gap-4 h-[300px] justify-center">
        <h1 className="text-white text-[32px]">Miracle TCP Capital Corp. (Nasdaq: TCPC)</h1>
        <hr />
        <h1 className="text-white ">{page}</h1>
      </SliderContentVer2Wrapper>
    </BlogSliderWrapper>
  );
};
