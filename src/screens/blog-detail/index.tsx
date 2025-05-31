"use client";
import React from "react";
import { BlogDetailScreenContent, BlogDetailScreenWrapper } from "./styled";
import { fakeDataNewsVer2 } from "@/data";
import NewDetailBar from "@/components/new-detail-bar";
import OtherNewsSection from "@/components/other-news-section";
import { coverDateNumberToString } from "@/utils";

const BlogDetailScreen = ({ blog }: any) => {
  const post = fakeDataNewsVer2[1];

  const getContentFragment = (index: any, text: any, obj: any, type?: any) => {
    let modifiedText: any = text;

    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-3xl font-bold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={"paragraph"}>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-2xl font-bold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "grid-img":
        return (
          <div key={index} className="grid grid-cols-2 w-max-[600px] h-max-[300px] gap-3 flex-wrap">
            {modifiedText.map((item: any, i: any) => (
              <img src={item} key={i} className="grid-imgs object-cover w-fit h-max-[50px]!" />
            ))}
          </div>
        );
      case "list-text":
        return (
          <ul key={index} className="list-disc pl-3 mt-6">
            {modifiedText.map((item: any, i: any) => (
              <li className="text-[22px]" key={item}>
                {item}
              </li>
            ))}
          </ul>
        );
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <BlogDetailScreenWrapper>
      <BlogDetailScreenContent>
        {/* content */}
        <div className="relative overflow-hidden shadown-md flex flex-col gap-5 ">
          <h1>{post.title}</h1>
          <p className="intro text-gray-600 font-medium">{post.intro}</p>
          <hr />
          <NewDetailBar NewDetail={post} />
          <img src={post.featuredImage.url} alt={post.title} className="object-top  h-full w-full" />
          <div className="flex gap-2">
            <div className="flex justify-center items-center size-10 bg-black text-white rounded-full ">
              <span className="font-semibold text-[20px]">M</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="font-semibold text-[14px]">By Mircale Corps</span>
              <span className="text-gray-600 text-[12px]">{coverDateNumberToString(post.extablishedDate)}</span>
            </div>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-3">
          {post.content.raw.children.map((typeObj: any, index: any) => {
            const children = typeObj.children?.map((item: any, itemIndex: any) => {
              return getContentFragment(itemIndex, item.text, item);
            });
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </BlogDetailScreenContent>
      <OtherNewsSection />
    </BlogDetailScreenWrapper>
  );
};

export default BlogDetailScreen;
