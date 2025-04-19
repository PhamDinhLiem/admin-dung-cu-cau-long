import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import { getMediaData } from "@/utils";
import Button from "../button";
import LineDate from "../line-date";
import moment from "moment";
import styles from "./index.module.css";

export const CustomBlogItem = ({ data }: { data: IResponse<BlogOutput> }) => {
  const { title, cover_img, description, slug, release_date } = data?.attributes;
  const { url, formats } = getMediaData(cover_img);

  return (
    <div className="mb-50">
      <div className={styles.wrapper}>
        <img
          className={`${styles.coverImage}`}
          src={`${process.env.NEXT_GRAPHQL_API_ENDPOINT}${formats?.medium?.url ?? url}`}
          alt={title}
        />
        <div className="flex flex-col">
          <h4 className="">{title}</h4>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
    </div>
  );
};
