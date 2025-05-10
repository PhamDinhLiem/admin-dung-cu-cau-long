"use client";
import LatestNewsBLock from "@/components/latest-news-block";
import { AboutBlockWrapper, BlogHomeScreenWrapper, ContactBlockWrapper } from "./styled";
import BlockBorderTop from "@/components/block-border-top";
import ReadMoreButton from "@/components/read-more-btn";

const BlogHomeScreen = () => {
  return (
    <div className="w-full flex justify-center">
      <BlogHomeScreenWrapper className="gap-5">
        {/**Phần block tin tức mới nhất */}
        <LatestNewsBLock />
        {/**Phần block about */}
        <AboutBlockWrapper>
          <BlockBorderTop pt="20px">
            <h2 className="mb-9">About me</h2>
            <p className="mb-5 text-[15px]">
              BlackRock TCP Capital Corp. is an externally-managed specialty finance company focused on middle-market
              lending. We have elected to be regulated as a business development company, or BDC, under the Investment
              Company Act of 1940. Our stock is traded on NASDAQ under the ticker symbol “TCPC”. BlackRock TCP Capital
              Corp’s investment objective is to achieve high total returns through current income and capital
              appreciation, with an emphasis on principal protection.
            </p>
            <ReadMoreButton link={"/"} />
          </BlockBorderTop>
        </AboutBlockWrapper>
        {/**Phần block Contact */}
        <ContactBlockWrapper>
          <BlockBorderTop pt="20px">
            <h2 className="mb-9">Contact me</h2>
            <div className="flex flex-col">
              <div className="flex gap-1">
                <p className="font-bold text-[17px]">Email</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="mb-5 text-[15px]">
                Please include your full name and CFA Institute ID with your message to ensure we can assist you as
                quickly as possible.
              </p>
              <div className="border-b border-blue w-fit flex items-center pb-[0px] mb-5">
                <a href="mailto:tanhiep.invest@gmail.com" className=" text-blue flex font-semibold text-base">
                  Email me
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-blue h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                </svg>
              </div>
              <div className="flex gap-1 items-center">
                <p className="font-bold text-[17px] mb-1">Reach me</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="mb-5 text-[15px]">
                We offer 24-hour phone support Sunday 5:00 p.m. to Friday 5:00 p.m. ET. Have your CFA Institute ID ready
                so we can help you as quickly as possible.
              </p>
              <a href="#" className=" text-blue flex font-semibold text-base text-[15px]">
                Viet Nam
              </a>
              <p className="font-semibold text-[15px] mt-2 mb-5">+84 352760309</p>
            </div>
            <ReadMoreButton link={"/"} />
          </BlockBorderTop>
        </ContactBlockWrapper>
      </BlogHomeScreenWrapper>
    </div>
  );
};
export default BlogHomeScreen;
