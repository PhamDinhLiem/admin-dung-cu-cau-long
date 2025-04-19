import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import { getMediaData } from "@/utils";
import Button from "../button";
import LineDate from "../line-date";
import moment from "moment";

export const BlogItem = ({ data }: { data: IResponse<BlogOutput> }) => {
  const { title, cover_img, description, slug, release_date } = data?.attributes;
  const { url, formats } = getMediaData(cover_img);

  return (
    <div className="mb-50">
      <LineDate date={moment(release_date).format("DD.MM.YYYY")} />

      <div className="mt-24 mb-24">
        <h2 className="text-center mb-32 sm-mb-24">{title}</h2>
        <img
          className="object-cover w-full h-[250px] lg:h-[400px]"
          src={`${process.env.NEXT_GRAPHQL_API_ENDPOINT}${formats?.medium?.url ?? url}`}
          alt={title}
        />
        <div className="body-2 mt-24" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <a href={`/tin-tuc/noi-bat/${slug}`}>
        <Button>Xem thêm</Button>
      </a>
    </div>
  );
};
