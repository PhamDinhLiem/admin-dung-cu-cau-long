import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import { getMediaData } from "@/utils";
import moment from "moment";
import LineDate from "../line-date";

export const BlogDetail = ({ data }: { data: IResponse<BlogOutput> }) => {
  const { title, cover_img, release_date, content } = data?.attributes;
  const { url, formats } = getMediaData(cover_img);

  return (
    <div className="mb-50">
      <LineDate date={moment(release_date).format("DD.MM.YYYY")} />

      <div className="mt-20 mb-24">
        <h2 className="text-center mb-32 sm-mb-24">{title}</h2>
        <img src={`${process.env.NEXT_GRAPHQL_API_ENDPOINT}${formats?.medium?.url ?? url}`} alt={title} />
        <div className="body-2 mt-24" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
