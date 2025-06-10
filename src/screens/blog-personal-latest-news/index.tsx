import CustomPagination from "@/components/custom-pagination";
import { BlogLatestNewsScreenBlock, BlogLatestNewsScreenContent, BlogLatestNewsScreenWrapper } from "./styled";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const fakeDataNews = [
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content:
      "Long-term relationships with borrowers and deal sources who rely on our deep industry knowledge and in-house legal expertise",
    month: "April",
    date: "10",
    year: "2025",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
    month: "April",
    date: "10",
    year: "2025",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content:
      "Long-term relationships with borrowers and deal sources who rely on our deep industry knowledge and in-house legal expertise",
    month: "April",
    date: "10",
    year: "2025",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
    month: "April",
    date: "10",
    year: "2025",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
    month: "April",
    date: "10",
    year: "2026",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
    month: "April",
    date: "10",
    year: "2026",
  },
  {
    title: "BlackRock TCP Capital Corp. (Nasdaq: TCPC)",
    content: "More than 20 years of experience investing in private credit through multiple market cycles",
    month: "April",
    date: "10",
    year: "2027",
  },
];

interface NewsDataProps {
  title: string;
  content: string;
  month: string;
  date: string;
  year: string;
}

//Hàm lấy danh sách năm để filter
const getFilterYear = (newsData: NewsDataProps[]): string[] => {
  const years = newsData.map((news) => news.year);
  const setYears = new Set(years); // goi den set de loai bo cac gia tri trung lap
  const uniqueYears: string[] = [];
  setYears.forEach((year) => uniqueYears.push(year));
  return uniqueYears;
};

const BlogPersonalLatestNews = () => {
  const [years, setYear] = useState<string[]>(getFilterYear(fakeDataNews));
  const [currentNewPage, setCurrentNewPage] = useState<NewsDataProps[]>([]);
  const [blogNews, setBlogNews] = useState<NewsDataProps[]>([]);
  const [filterYear, setFilterYear] = useState<string>(years[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  ///useEffect này để get các giá trị năm cho chức năng filter sau
  useEffect(() => {
    const selectYears = getFilterYear(fakeDataNews);
    setYear(selectYears);
  }, []);
  ///
  useEffect(() => {
    const lastPostIndex = currentPage * 3;
    const firstPostIndex = lastPostIndex - 3;

    let currentNews: NewsDataProps[] = [...fakeDataNews];
    if (filterYear) {
      currentNews = currentNews.filter((news) => news.year === filterYear);
    }

    setBlogNews(currentNews);

    setCurrentNewPage(currentNews.slice(firstPostIndex, lastPostIndex));
  }, [currentPage, filterYear]);

  return (
    <BlogLatestNewsScreenWrapper>
      <BlogLatestNewsScreenContent>
        {/*Phần đề chọn filter theo năm*/}
        <div className="flex items-center gap-2">
          <p>Year:</p>
          <select
            className="px-2 rounded-none py-1 font-light"
            onChange={(e) => setFilterYear(e.target.value)}
            value={filterYear}
          >
            {years.map((year, index) => (
              <option className=" rounded-none" value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {/*Phần list danh sách tin tức filter theo năm*/}
        <div className="mt-5 mb-5">
          {currentNewPage.map((item, index) => (
            <BlogLatestNewsScreenBlock key={index}>
              <p className="text-[17px] font-bold">{`${item.date} ${item.month} ${item.year}`}</p>
              <p className="text-[16px]">{item.content}</p>
              <div className="flex items-center gap-1">
                <div className="flex px-1 py-1 items-center rounded-full justify-center bg-gray-500">
                  <FaEye />
                </div>
                <p className="font-bold ">Read More</p>
              </div>
            </BlogLatestNewsScreenBlock>
          ))}
        </div>
        {/*Phần Pagination*/}
        <CustomPagination
          totalPosts={blogNews.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          filterYear={filterYear}
        />
      </BlogLatestNewsScreenContent>
    </BlogLatestNewsScreenWrapper>
  );
};
export default BlogPersonalLatestNews;
