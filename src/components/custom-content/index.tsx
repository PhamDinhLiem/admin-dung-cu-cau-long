import { BlogOutput, IResponse, MetaPagination } from "@/@custom-types/graphql";
import Banner from "../banner";
import { BlogItem } from "../blog-item";
import BlogPagination from "../blog-pagination";
import SideBar from "../sidebar";
import styles from "./index.module.css";
import { toLower } from "lodash";
import { CustomBlogItem } from "../custom-blog-item";

export const CustomContent = ({
  data,
  searchParams,
  initTopic,
}: {
  initTopic: string;
  data: { data: IResponse<BlogOutput>[]; meta: MetaPagination };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let topicName;

  const filterFn = (topic: string | string[]) => {
    return data.data.filter((item) =>
      item.attributes.topics.data.find((e) => {
        if (e.attributes.slug == topic) {
          topicName = e.attributes.title;
        }
        return e.attributes.slug == topic;
      })
    );
  };

  const filterData = searchParams?.topic ? filterFn(toLower(searchParams?.topic as string)) : filterFn(initTopic);

  return (
    <div className="w-100">
      <Banner />
      <div className="container">
        {/* Render server side */}
        <div className={styles.big_wrapper}>
          <div className="text-5xl mt-20 mb-20">Tuyển dụng</div>
          <hr className="mb-20"></hr>
          <div></div>
          <div className={styles.content_wrapper}>
            <div className={styles.grid_layout}>
              {filterData.map((blog: IResponse<BlogOutput>, key: number) => (
                <CustomBlogItem key={key} data={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
