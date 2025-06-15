"use client";

import BlockBorderTop from "../block-border-top";
import ReadMoreButton from "../read-more-btn";
import { LatestNewsBlockWrapper, LatestNewsItemWrapper } from "./styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import AppContext from "@/contexts/app";
import { handleDateToString } from "@/utils/blog-utils";

const LatestNewsBLock = () => {
  const pathName = usePathname();
  const { sortedNews } = useContext(AppContext);
  // lấy ra ba giá trị đầu tiên
  const latestNews = sortedNews.slice(0, 3);

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
