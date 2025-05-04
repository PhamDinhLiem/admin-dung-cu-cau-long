import React from "react";
import Header from "@/components/header";
import BlogBanner from "@/components/customBanner";
import { BlockContentWrapper, LayoutBlogsWrapper } from "./styled";
import { headingBlogFont, mediumHeadingBlogFont } from "@/styles/font";

export default function LayoutBlogs({ children }: any) {
  return (
    <LayoutBlogsWrapper className={`${headingBlogFont.variable} ${mediumHeadingBlogFont.variable}`}>
      <div className="wrapper-box" style={{ position: "relative" }}>
        <Header />
        <BlogBanner />
        <BlockContentWrapper>{children}</BlockContentWrapper>
      </div>
    </LayoutBlogsWrapper>
  );
}
