import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import Banner from "@/components/banner";
import { BlogDetail } from "@/components/blog-detail";
import SideBar from "@/components/sidebar";
import CardBlog from "./card-blog";
import Comment from "./comment";
import styles from "./index.module.css";

export const Detail = ({
  data,
  searchParams,
}: {
  data: IResponse<BlogOutput>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let topicName;

  return (
    <div className="w-100">
      <Banner />

      <div className="container">
        {/* Render server side */}
        <h1 className="text-center pt-50 pb-50 w-62 sm-pt-40 sm-pb-40">{topicName}</h1>
        <div className={styles.content_wrapper}>
          <div className={styles.content_left}>
            <BlogDetail data={data} />
            <CardBlog data={data} />
            <Comment />
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
