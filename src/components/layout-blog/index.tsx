import React from "react";
import Header from "@/components/header";
import BlogBanner from "@/components/customBanner";
import { BlockContentWrapper, LayoutBlogsWrapper } from "./styled";
import { Blk_Bold, Blk_ExtraBold, Blk_medium, headingBlogFont, mediumHeadingBlogFont } from "@/styles/font";
import { Footer } from "../footer";

export default function LayoutBlogs({ children }: any) {
  return (
    <LayoutBlogsWrapper
      className={`${headingBlogFont.variable} ${mediumHeadingBlogFont.variable}
         ${Blk_Bold.variable} ${Blk_ExtraBold.variable} ${Blk_medium.variable}`}
    >
      <div className="wrapper-box" style={{ position: "relative" }}>
        <Header />
        <BlogBanner />
        <BlockContentWrapper>{children}</BlockContentWrapper>
        <Footer />
      </div>
    </LayoutBlogsWrapper>
  );
}
