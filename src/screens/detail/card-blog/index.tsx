"use client";

import React, { useMemo } from "react";
import { CardBlogWrapper, Hr } from "./styled";
import SliderAuto, { ListData } from "@/components/slide-auto";
import { BlogOutput, IResponse } from "@/@custom-types/graphql";
import { Flex } from "@/styles/common";
import Icons from "@/components/icons";

const CardBlog = ({ data }: { data: IResponse<BlogOutput> }) => {
  const { related_blogs } = data?.attributes;

  const listData: ListData[] = useMemo(() => {
    return related_blogs.data.map((el) => ({
      title: el.attributes.title,
      image: `${el.attributes.cover_img.data.attributes.url}`,
      date: el.attributes.release_date,
      href: `/tin-tuc/noi-bat/${el.attributes.slug}`,
    }));
  }, [related_blogs]);

  return (
    <CardBlogWrapper>
      <Hr />
      <Flex gap={16} $gapMb={16} align="center" className="mb-24">
        <h5>Chia sẻ bài viết qua</h5>

        <Flex gap={14} $gapMb={14} justify="center">
          <a
            className="cursor-pointer"
            target="_blank"
            href={`https://www.facebook.com/share.php?u=${typeof window !== "undefined" && window.location.href}`}
          >
            <Icons icon="icon-facebook" />
          </a>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" && window.location.href}`}
          >
            <Icons icon="icon-twitter" />
          </a>
          <a
            target="_blank"
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== "undefined" && window.location.href}`}
          >
            <Icons icon="icon-linkin" />
          </a>
        </Flex>
      </Flex>

      {Boolean(listData.length) && (
        <div>
          <Hr />
          <h5 className="mb-24">Các bài viết liên quan</h5>
          <SliderAuto listData={listData} />
        </div>
      )}
    </CardBlogWrapper>
  );
};

export default CardBlog;
