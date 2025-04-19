import { BlogOutput, IResponse, MetaPagination } from "@/@custom-types/graphql";
import Banner from "../banner";
import { BlogItem } from "../blog-item";
import BlogPagination from "../blog-pagination";
import SideBar from "../sidebar";
import styles from "./index.module.css";
import { toLower } from "lodash";

export const Content = ({
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
        <h1 className="text-center pt-50 pb-50 w-62 sm-pt-40 sm-pb-40">{topicName}</h1>
        <div className={styles.content_wrapper}>
          <div className={styles.content_left}>
            {filterData.map((blog: IResponse<BlogOutput>, key: number) => (
              <BlogItem key={key} data={blog} />
            ))}

            <BlogPagination data={data.meta} searchParams={searchParams} />
          </div>

          {/* Render client side */}
          <div className={styles.content_right + " hide-mobile"}>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
