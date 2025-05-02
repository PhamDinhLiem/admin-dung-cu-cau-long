"use client";

import React, { useState } from "react";
import { BlogBannerWrapper } from "./styled";
import { usePathname } from "next/navigation";
import BlogSlider from "../customSlider";

interface BannerProps {}

const BlogBanner = ({}: BannerProps) => {
  const pathName = usePathname();
  const [sliderType, setsliderType] = useState<string>("ver1");

  const handlerBlogBanner = (pathName: string) => {
    switch (pathName) {
      case "blogs":
        setsliderType("ver1");
        break;
      case "":
        setsliderType("ver2");
        break;
      default:
        break;
    }
  };

  handlerBlogBanner(pathName);

  return (
    <BlogBannerWrapper>
      <BlogSlider sliderType={sliderType} />
      <div className="w-full">
        <img alt="bannerImg" src={`${process.env.basePath}/img/blogBanner.jpg`} className="" />
      </div>
    </BlogBannerWrapper>
  );
};

export default BlogBanner;
