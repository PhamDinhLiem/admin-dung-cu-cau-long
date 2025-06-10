"use client";

import { fakeDataNewsVer2 } from "@/data";
import BlockBorderTop from "../block-border-top";
import ReadMoreButton from "../read-more-btn";
import { LatestNewsBlockWrapper, LatestNewsItemWrapper } from "./styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import AppContext from "@/contexts/app";

//Hàm xử lý ngày ra format Month(chữ) Date, Year
export const handleDateToString = (date: Date) => {
  // Xử lý tháng số ra tháng tiếng anh
  let months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // biến month này sẽ được gán dự theo index
  let month: string = months[date.getMonth()];

  return `${month} ${date.getDate().toString()}, ${date.getFullYear().toString()}`;
};

const LatestNewsBLock = () => {
  const pathName = usePathname();
  const { sortedNews } = useContext(AppContext);
  //cần hàm sort
  const latestNews = sortedNews.slice(0, 3); // Chưa xử lý cái này

  //Hàm xử lý cho link chuyển trang tới bài viết
  const handleNavigateLink = (subCategory: string, slug: string) => {
    if (pathName == "/blog") {
      return `/blog/personal/${subCategory}/${slug}`;
    } else if (pathName == "/blog/personal") {
      return `/blog/personal/${subCategory}/${slug}`;
    }
    return "";
  };

  return (
    <LatestNewsBlockWrapper>
      <BlockBorderTop pt={"20px"}>
        <h2 className="mb-5">Latest News</h2>
        {latestNews.map((news: any, index: number) => {
          if (index > 3) {
            return null;
          } else {
            return (
              <Link key={index} href={handleNavigateLink(news.subcategory, news.slug)} className="hover:underline">
                <LatestNewsItemWrapper className="flex flex-col gap-2 pb-5 mb-5 border-b " key={index}>
                  <p className="font-bold text-[17px]">{handleDateToString(news.extablishedDate)}</p>
                  <p className="text-[15px]">{news.intro}</p>
                </LatestNewsItemWrapper>
              </Link>
            );
          }
        })}
        <ReadMoreButton link={"/blog/personal"} state="latest-news" title="All release" />
      </BlockBorderTop>
    </LatestNewsBlockWrapper>
  );
};
export default LatestNewsBLock;
