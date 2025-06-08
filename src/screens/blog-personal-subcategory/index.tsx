"use client";

import { usePathname } from "next/navigation";
import {
  BlogPaginationNews,
  BlogPersonalSubcategoryContent,
  BlogPersonalSubcategoryWrapper,
  BlogTopNewsSection,
} from "./styled";
import PersonalHeader from "@/components/personal-header";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/contexts/app";
import { fakeDataNews } from "@/data";
import CustomPagination from "@/components/custom-pagination";

interface BlogPersonalSubcactegoryProp {
  category?: string;
}

interface NewsItem {
  title: string;
  content: string;
  month: string;
  date: string;
  year: string;
  src: string;
}

export const handlePathName = (pathName: string) => {
  const parts = pathName.split("/");
  return parts[parts.length - 1]; //Lấy subCategory
};

const BlogPersonalSubcategoryScreen = () => {
  const pathname = usePathname();
  const { personalState } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [subCategory, setSubCategory] = useState<string>("");
  const [paginationNews, setpaginationNews] = useState<NewsItem[]>([]); // phần tin tức này sẽ được pagination

  //các state chia tin tức thành các phần
  const [topNews, settopNews] = useState(fakeDataNews.slice(0, 4)); // lấy 4 phần tin tức mới nhất
  const [previousNews, setpreviousNews] = useState(fakeDataNews.slice(4)); // lấy phần tin tức còn lại

  //UseEffect set news khi get dữ liệu về
  useEffect(() => {}, []);

  //set tiếp cho paginationNews
  useEffect(() => {
    previousNews && setpaginationNews(previousNews);
  }, [previousNews]);

  //UseEffect cho pagination
  useEffect(() => {
    const lastPostIndex = currentPage * 3;
    const firstPostIndex = lastPostIndex - 3;

    let currentNews: NewsItem[] = [...fakeDataNews];

    setpaginationNews(currentNews);

    setpaginationNews(currentNews.slice(firstPostIndex, lastPostIndex));
  }, [currentPage]);

  useEffect(() => {
    pathname && setSubCategory(handlePathName(pathname));
  }, [pathname]);

  return (
    <div>
      <PersonalHeader />
      <BlogPersonalSubcategoryWrapper>
        <BlogPersonalSubcategoryContent>
          <h1 className="text-[28px] ">{`${subCategory}`}</h1>
          {topNews ? (
            <BlogTopNewsSection>
              <div className="w-1/2 flex flex-col gap-4 mb-w-full ">
                <img src={topNews[0].src} alt={topNews[0].title} className="h-[50%]" />
                <h3 className="">{topNews[0].title}</h3>
                <p>{topNews[0].content}</p>
              </div>
              <div className="w-1/3  flex flex-col gap-3 px-3 border-r-2 border-l-2 mb-w-full ">
                <img src={topNews[1].src} alt={topNews[0].title} />
                <h4 className="">{topNews[1].title}</h4>
                <p>{topNews[1].content}</p>
              </div>
              <div className="w-1/3 flex flex-col gap-5 mb-w-full ">
                <div className="h-1/2 flex flex-col gap-3">
                  <img src={topNews[2].src} className="h-[130px]" alt={topNews[0].title} />
                  <h4 className="">{topNews[2].title}</h4>
                  <p className="text-[14px]">{topNews[2].content}</p>
                </div>
                <div className="h-1/2 flex flex-col gap-3">
                  <img src={topNews[3].src} className="h-[130px]" alt={topNews[0].title} />
                  <h4 className="">{topNews[3].title}</h4>
                  <p>{topNews[3].content}</p>
                </div>
              </div>
            </BlogTopNewsSection>
          ) : (
            ""
          )}
          {paginationNews.length != 0 ? (
            <BlogPaginationNews>
              {paginationNews.map((newsItem: NewsItem, index) => (
                <div key={index} className="flex gap-4 border-b-2 py-3 items-center">
                  <img src={newsItem.src} className="h-full w-56" alt={newsItem.title} />
                  <div>
                    <h4>{newsItem.title}</h4>
                    <p>{newsItem.content}</p>
                  </div>
                  {/* Thêm nội dung khác nếu cần */}
                </div>
              ))}
            </BlogPaginationNews>
          ) : (
            ""
          )}
          <CustomPagination
            totalPosts={previousNews.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </BlogPersonalSubcategoryContent>
      </BlogPersonalSubcategoryWrapper>
    </div>
  );
};
export default BlogPersonalSubcategoryScreen;
