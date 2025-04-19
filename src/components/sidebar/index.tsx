"use client";

import { AuthorOutput, TopicOutput } from "@/@custom-types/graphql";
import { ERROR_API_MESSAGE } from "@/constants/app/message";
import AppContext from "@/contexts/app";
import { GET_AUTHOR } from "@/graphql/queries/blog";
import { Flex, FlexColumn } from "@/styles/common";
import { formatDataGraphql } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Alert } from "../alert";
import Block from "../block";
import DropDown from "../dropdown-fieldset";
import Icons from "../icons";
import { ImageWrapper, ProfileWrapper, SideBarWrapper } from "./styled";

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  const router = useRouter();
  const { topics } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [author, setAuthor] = useState<AuthorOutput>();

  const searchParams = useSearchParams();
  const topic = searchParams.get("topic")?.toLowerCase();

  const [getAuthor] = useLazyQuery<AuthorOutput>(GET_AUTHOR, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    getAuthor()
      .then(({ data }) => {
        const formatData = formatDataGraphql(data, "authors");
        if (formatData) {
          setAuthor(formatData[0]);
        }
      })
      .catch((e) => {
        Alert("ERROR", ERROR_API_MESSAGE);
        console.log(e);
      });
  }, []);

  return (
    <SideBarWrapper>
      <ProfileWrapper>
        <ImageWrapper>
          <img loading="lazy" src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${author?.avatar.data.attributes.url}`} />
        </ImageWrapper>
        <FlexColumn className="text-center">
          <h3>{author?.name}</h3>

          <p className="body-3">{author?.self_bio}</p>
          <div className="body-3" dangerouslySetInnerHTML={{ __html: author?.self_short_description as string }}></div>

          <Flex gap={14} $gapMb={14} justify="center" className="mt-16">
            <a target="_blank" href={author?.socials?.social_facebook_link}>
              <Icons icon="icon-facebook" />
            </a>
            <a target="_blank" href={author?.socials?.social_instgram_link}>
              <Icons icon="icon-instagram" />
            </a>
            <a target="_blank" href={author?.socials?.social_twitter_link}>
              <Icons icon="icon-twitter" />
            </a>
            <a target="_blank" href={author?.socials?.social_linkedin_link}>
              <Icons icon="icon-linkin" />
            </a>
          </Flex>
        </FlexColumn>
      </ProfileWrapper>

      <Block title="khám phá chủ đề">
        <div className="mt-24">
          <DropDown
            value={(topic as string) ?? undefined}
            title="Chọn chủ đề"
            onChange={(e) => {
              router.push(`/tin-tuc/noi-bat?topic=${e}`);
            }}
            list={topics?.map((item: TopicOutput) => ({
              value: item.slug,
              label: item.title,
            }))}
          />
        </div>
      </Block>
      {/* 
      <Block title="được quan tâm">
        <ul className="pl-16 mb-0" style={{ listStyle: "decimal" }}>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
          <li>
            <p>Những điều có thể bạn chưa biết về tác giả ABC</p>
          </li>
        </ul>
      </Block>
      <Block title="Đăng ký nội dung">
        <FlexColumn gap={14}>
          <p className="body-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <InputFieldSet placeholder="Nhập email của bạn" value={email} onChange={(e) => setEmail(e.target.value)} />

          <Button>Đăng ký</Button>
        </FlexColumn>
      </Block>

      <ImageGallery /> */}
    </SideBarWrapper>
  );
};

export default SideBar;
