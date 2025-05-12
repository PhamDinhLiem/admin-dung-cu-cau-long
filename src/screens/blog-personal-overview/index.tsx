"use client";

import LatestNewsBLock from "@/components/latest-news-block";
import { BlogOverViewScreenContent, BlogOverViewScreenWrapper } from "./styled";
import BlockBorderTop from "@/components/block-border-top";
import { IoDocumentText } from "react-icons/io5";
import CustomButton from "@/components/custom-button";

const BusinessCategory = ["Finace", "Economy", "Tech", "Stock", "Crypto"];
const LifeStyleCategory = [
  "All Lifestyle",
  "Food",
  "Love",
  "Your Money",
  "Well",
  "Travel",
  "Style",
  "Personal Tech",
  "Real Estate",
  "T Magazine",
];
const EducationCategory = ["Research", "Reporting", "Publications", "Teaching", "Students"];

const BlogPersonalOverview = () => {
  return (
    <BlogOverViewScreenWrapper>
      <BlogOverViewScreenContent>
        {/*Phần tin tức mới nhất*/}
        <LatestNewsBLock />
        {/*Phần content market hiện tại chưa có nên để trống*/}
        <div className="overview-block market-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Market </h2>
          </BlockBorderTop>
        </div>
        {/*Phần content resources */}
        <div className="overview-block resources-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Resources </h2>
            <div className="flex gap-4">
              <img
                alt="resource-content"
                src="https://s203.q4cdn.com/265353345/files/doc_downloads/factsheet/2024/TCPC-Fact-Sheet_December-2024_vF.png"
              />
              <div>
                <p>December 2024</p>
                <div className="flex items-center cursor-pointer gap-3 mt-3">
                  <div className="px-1 py-1 rounded-full border-2 border-gray-300 text-orange-600">
                    <IoDocumentText />
                  </div>
                  <p className="">Download PDF</p>
                </div>
              </div>
            </div>
            <CustomButton classname={" bg-white flex items-center mt-9"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5 text-orange-500  "
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <p className="text-black mt-1 font-bold uppercase ">All Resources</p>
            </CustomButton>
          </BlockBorderTop>
        </div>
        {/*Phần content business */}
        <div className="overview-block business-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Business </h2>
            <div className="flex gap-2 flex-col ">
              {BusinessCategory.map((item, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <a className="cursor-pointer hover:underline">{item}</a>
                </div>
              ))}
            </div>
            <CustomButton classname={" bg-white flex items-center mt-9"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5 text-orange-500  "
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <p className="text-black mt-1 font-bold uppercase ">All Business</p>
            </CustomButton>
          </BlockBorderTop>
        </div>
        {/*Phần content LifeStyle */}
        <div className="overview-block business-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">LifeStyle </h2>
            <div className="grid grid-cols-2 grid-rows-5 gap-2">
              {LifeStyleCategory.map((item, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <a className="cursor-pointer hover:underline">{item}</a>
                </div>
              ))}
            </div>
            <CustomButton classname={" bg-white flex items-center mt-9"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5 text-orange-500  "
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <p className="text-black mt-1 font-bold uppercase ">All Lifestyle</p>
            </CustomButton>
          </BlockBorderTop>
        </div>
        {/*Phần content Education */}
        <div className="overview-block education-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Education </h2>
            <div className="flex gap-2 flex-col ">
              {EducationCategory.map((item, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <a className="cursor-pointer hover:underline">{item}</a>
                </div>
              ))}
            </div>
            <CustomButton classname={" bg-white flex items-center mt-9"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5 text-orange-500  "
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <p className="text-black mt-1 font-bold uppercase ">All Education</p>
            </CustomButton>
          </BlockBorderTop>
        </div>
      </BlogOverViewScreenContent>
    </BlogOverViewScreenWrapper>
  );
};
export default BlogPersonalOverview;
