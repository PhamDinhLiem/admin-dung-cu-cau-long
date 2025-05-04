"use client";
import LatestNewsBLock from "@/components/latest-news-block";
import { AboutBlockWrapper, BlogHomeScreenWrapper } from "./styled";
import BlockBorderTop from "@/components/block-border-top";
import ReadMoreButton from "@/components/read-more-btn";

const BlogHomeScreen = () => {
  return (
    <BlogHomeScreenWrapper className="gap-6">
      {/**Phần block tin tức mới nhất */}
      <LatestNewsBLock />
      {/**Phần block about */}
      <AboutBlockWrapper>
        <BlockBorderTop pt="20px">
          <h2 className="mb-9">About us</h2>
          <p className="mb-5">
            BlackRock TCP Capital Corp. is an externally-managed specialty finance company focused on middle-market
            lending. We have elected to be regulated as a business development company, or BDC, under the Investment
            Company Act of 1940. Our stock is traded on NASDAQ under the ticker symbol “TCPC”. BlackRock TCP Capital
            Corp’s investment objective is to achieve high total returns through current income and capital
            appreciation, with an emphasis on principal protection.
          </p>
          <ReadMoreButton link={"/"} />
        </BlockBorderTop>
      </AboutBlockWrapper>
      <LatestNewsBLock />
    </BlogHomeScreenWrapper>
  );
};
export default BlogHomeScreen;
