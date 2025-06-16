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
import Link from "next/link";

// Lấy phần cuối của url
export const handlePathName = (pathName: string) => {
  const parts = pathName.split("/");
  return parts[parts.length - 1]; //Lấy subCategory
};

//Cắt chuỗi
export const stringSlice = (str: string, cutPoint: number) => {
  if (str.length > cutPoint) {
    return str.slice(0, cutPoint) + "..."; //Cắt chuỗi
  }
  return str;
};

//Hàm xử lý cho render cho các title dính liền
const handleTitle = (title: string) => {
  const titleNeedToHandle: string[] = ["alllifestyle", "yourmoney", "personaltech", "realestate", "tmagazine"];
  const titleAfterHandle: string[] = ["all lifestyle", "your money", "personal tech", "real estate", "t magazine"];
  const index = titleNeedToHandle.indexOf(title);
  return index !== -1 ? titleAfterHandle[index] : title;
};

const BlogPersonalSubcategoryScreen = () => {
  const pathname = usePathname();
  const { sortedNews } = useContext(AppContext);
  const [news, setNews] = useState<any>([]); // Lọc lại danh sách tin tức để hiển thị dựa trên subcategory
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [subCategory, setSubCategory] = useState<string>("");
  const [paginationNews, setPaginationNews] = useState<any>([]); // phần tin tức này sẽ được pagination

  //các state chia tin tức thành các phần
  const [topNews, setTopNews] = useState<any>([]); // lấy 4 phần tin tức mới nhất
  const [previousNews, setPreviousNews] = useState(fakeDataNews.slice(4)); // lấy phần tin tức còn lại

  //set tiếp cho paginationNews
  useEffect(() => {
    previousNews && setPaginationNews(previousNews);
  }, [previousNews]);

  useEffect(() => {
    if (pathname && sortedNews) {
      const p = handlePathName(pathname); // Phần đuôi subcategory lấy từ pathname
      //setNews(sortedNews.filter((news: any) => news.subcategory == p)); tạm comment dòng này
      setNews(sortedNews.filter((news: any) => news.subcategory == "finance")); //set cứng category hiển thị là finance
    }
  }, [pathname, sortedNews]);

  //UseEffect cho pagination
  useEffect(() => {
    if (news) {
      const lastPostIndex = currentPage * 3;
      const firstPostIndex = lastPostIndex - 3;

      let currentNews = [...news];

      setTopNews(news.slice(0, 4));

      setPaginationNews(currentNews);

      setPaginationNews(currentNews.slice(firstPostIndex, lastPostIndex));
    }
  }, [currentPage, news]);

  useEffect(() => {
    pathname && setSubCategory(handlePathName(pathname));
  }, [pathname]);

  return (
    <div>
      <PersonalHeader />
      <BlogPersonalSubcategoryWrapper>
        <BlogPersonalSubcategoryContent>
          <h1 className="text-[28px] capitalize ">{handleTitle(subCategory)}</h1>
          {topNews.length != 0 ? (
            <BlogTopNewsSection>
              <div className="w-1/2 tablet-implement">
                <Link
                  href={`/blog/personal/${handlePathName(pathname)}/${topNews[0].slug}`}
                  className="flex flex-col gap-4 mb-w-full "
                >
                  <img src={topNews[0].featuredImage.url} alt={topNews[0].title} className="h-[47%] max-h-[350px]" />
                  <h3 className="">{topNews[0].title}</h3>
                  <p>{stringSlice(topNews[0].intro, 120)}</p>
                </Link>
              </div>
              <div className="w-1/3  border-r-2 border-l-2 tablet-implement">
                <Link
                  className="flex flex-col gap-3 px-3 mb-w-full remove-px"
                  href={`/blog/personal/${handlePathName(pathname)}/${topNews[1].slug}`}
                >
                  <img className="max-h-[250px]" src={topNews[1].featuredImage.url} alt={topNews[1].title} />
                  <h4 className="">{topNews[1].title}</h4>
                  <p className="text-[14px]">{stringSlice(topNews[1].intro, 120)}</p>
                </Link>
              </div>
              <div className="w-1/3 flex flex-col gap-5 mb-w-full tablet-implement">
                <div className="h-1/2 tablet-h-full">
                  <Link
                    className="flex flex-col gap-3"
                    href={`/blog/personal/${handlePathName(pathname)}/${topNews[2].slug}`}
                  >
                    <img src={topNews[2].featuredImage.url} className="h-[130px]" alt={topNews[2].title} />
                    <h4 className="">{topNews[2].title}</h4>
                    <p className="text-[14px]">{stringSlice(topNews[2].intro, 120)}</p>
                  </Link>
                </div>
                <div className="h-1/2 tablet-h-full">
                  <Link
                    className="flex flex-col gap-3"
                    href={`/blog/personal/${handlePathName(pathname)}/${topNews[3].slug}`}
                  >
                    <img src={topNews[3]?.featuredImage.url} className="h-[130px]" alt={topNews[0].title} />
                    <h4 className="">{topNews[3].title}</h4>
                    <p className="text-[14px]">{stringSlice(topNews[3].intro, 120)}</p>
                  </Link>
                </div>
              </div>
            </BlogTopNewsSection>
          ) : (
            ""
          )}
          {paginationNews.length != 0 ? (
            <BlogPaginationNews>
              {paginationNews?.map((news: any, index: number) => (
                <Link key={index} href={`/blog/personal/${handlePathName(pathname)}/${news.slug}`}>
                  <div className="flex gap-4 border-b-2 py-3 items-center">
                    <img src={news.featuredImage.url} className="pagination_news_img" alt={news.title} />
                    <div>
                      <h4>{news.title}</h4>
                      <p>{news.intro}</p>
                    </div>
                    {/* Thêm nội dung khác nếu cần */}
                  </div>
                </Link>
              ))}
            </BlogPaginationNews>
          ) : (
            ""
          )}
          <CustomPagination totalPosts={news.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </BlogPersonalSubcategoryContent>
      </BlogPersonalSubcategoryWrapper>
    </div>
  );
};
export default BlogPersonalSubcategoryScreen;
