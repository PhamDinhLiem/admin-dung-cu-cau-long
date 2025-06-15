import CustomPagination from "@/components/custom-pagination";
import { BlogLatestNewsScreenBlock, BlogLatestNewsScreenContent, BlogLatestNewsScreenWrapper } from "./styled";
import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import AppContext from "@/contexts/app";
import { handleDateToString } from "@/utils/blog-utils";
import Link from "next/link";

const getUniqueYears = (sortedNews: [any]) => {
  //Lọc các trường năm thành 1 danh sách
  const years = sortedNews.map((news: any) => news.extablishedDate.getFullYear().toString());
  const setYears = new Set(years); // goi den set de loai bo cac gia tri trung lap
  const uniqueYears: string[] = []; // mảng lưu lại các năm đã loại bỏ giá trị trùng lặp
  setYears.forEach((year: any) => uniqueYears.push(year));
  return uniqueYears;
};

const BlogPersonalLatestNews = () => {
  const { sortedNews } = useContext(AppContext); // danh sách tin tức đã được lọc
  const [fillterYears, setfilterYears] = useState<string[]>(getUniqueYears(sortedNews)); //state này là mảng chứa các năm để filter theo nam
  const [currentNewPage, setCurrentNewPage] = useState<any[]>([]); // state này lưu danh sách bài viết hiện tại trong pagination
  const [blogNews, setBlogNews] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // vị trí trang hiện tại --index
  const [onFilterYear, setOnFilterYear] = useState<string>(fillterYears[0]); //năm đang được filter

  useEffect(() => {
    const lastPostIndex = currentPage * 3;
    const firstPostIndex = lastPostIndex - 3;

    //clone lại danh sách bài viết để xử lý
    let currentNews: any[] = [...sortedNews];

    // nếu có năm đang được chọn thì thì lọc ra danh sách bài viết theo danh sách
    if (onFilterYear) {
      currentNews = currentNews.filter((item: any) => item.extablishedDate.getFullYear().toString() === onFilterYear);
    }

    setBlogNews(currentNews);

    setCurrentNewPage(currentNews.slice(firstPostIndex, lastPostIndex));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, onFilterYear]);

  return (
    <BlogLatestNewsScreenWrapper>
      <BlogLatestNewsScreenContent>
        {/*Phần đề chọn filter theo năm*/}
        <div className="flex items-center gap-2">
          <p>Year:</p>
          <select
            className="px-2 rounded-none py-1 font-light"
            onChange={(e) => setOnFilterYear(e.target.value)}
            value={onFilterYear}
          >
            {fillterYears.map((year, index) => (
              <option className=" rounded-none" value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {/*Phần list danh sách tin tức filter theo năm*/}
        <div className="mt-5 mb-5">
          {currentNewPage?.map((item, index) => (
            <Link href={`/blog/personal/${item.subcategory}/${item.slug}`} key={index}>
              <BlogLatestNewsScreenBlock key={index}>
                <p className="text-[17px] font-bold">{handleDateToString(item.extablishedDate)}</p>
                <p className="text-[16px] on-underlined ">{item.title}</p>
                <div className="flex items-center gap-1">
                  <div className="flex px-1 py-1 items-center rounded-full justify-center bg-gray-500">
                    <FaEye />
                  </div>
                  <p className="font-bold cursor-pointer">Read More</p>
                </div>
              </BlogLatestNewsScreenBlock>
            </Link>
          ))}
        </div>
        {/*Phần Pagination*/}
        <CustomPagination
          totalPosts={blogNews.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          filterYear={onFilterYear}
        />
      </BlogLatestNewsScreenContent>
    </BlogLatestNewsScreenWrapper>
  );
};
export default BlogPersonalLatestNews;
