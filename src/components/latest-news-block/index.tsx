"use client";

import BlockBorderTop from "../block-border-top";
import ReadMoreButton from "../read-more-btn";
import { LatestNewsBlockWrapper, LatestNewsItemWrapper } from "./styled";

const blockFakeDataNews = [
  {
    date: "April 10, 2025",
    title:
      "SANTA MONICA, Calif.--(BUSINESS WIRE)-- BlackRock TCP Capital Corp. (NASDAQ: TCPC) announced today that it will report its financial results for the first quarter ended March 31, 2025 on Thursday, May 8, 2025, prior to the opening of the financial markets.",
  },
  {
    date: "February 27, 2025",
    title:
      "BlackRock TCP Capital Corp. is an externally-managed specialty finance company focused on middle-market lending",
  },
  {
    date: "February 27, 2025",
    title:
      "Our stock is traded on NASDAQ under the ticker symbol “TCPC”. BlackRock TCP Capital Corp’s investment objective is to achieve high total returns through current income and capital appreciation, with an emphasis on principal protection.",
  },
];

const LatestNewsBLock = () => {
  return (
    <LatestNewsBlockWrapper>
      <BlockBorderTop pt={"20px"}>
        <h2 className="mb-9">Latest News</h2>
        {blockFakeDataNews.map((news, index) => {
          if (index > 3) {
            return null;
          } else {
            return (
              <LatestNewsItemWrapper className="flex flex-col gap-2 pb-5 mb-5 border-b " key={index}>
                <p className="font-bold text-[17px]">{news.date}</p>
                <p className="text-[15px]">{news.title}</p>
              </LatestNewsItemWrapper>
            );
          }
        })}
        <ReadMoreButton link={"/"} />
      </BlockBorderTop>
    </LatestNewsBlockWrapper>
  );
};
export default LatestNewsBLock;
