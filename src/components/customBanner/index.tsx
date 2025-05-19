"use Client";

import React, { useContext, useEffect, useState } from "react";
import { BlogBannerWrapper } from "./styled";
import { usePathname } from "next/navigation";
import { SliderContentVer1, SliderContentVer2 } from "../customSlider";
import AppContext from "@/contexts/app";

interface BannerProps {}

const BlogBanner = ({}: BannerProps) => {
  const pathName = usePathname();
  const [Banner, setBanner] = useState<React.ComponentType<any> | null>(null);
  const { plHeader } = useContext(AppContext);

  // Tạo một component hợp lệ dựa trên pathName
  const handleBanner = (pathName: string) => {
    switch (pathName) {
      case "/blog":
        setBanner(() => SliderContentVer1); // Set the component function directly
        break;
      case "/blog/about":
        // eslint-disable-next-line react/display-name
        setBanner(() => () => <SliderContentVer2 page="About Me" />);
        break;
      case "/blog/contact":
        // eslint-disable-next-line react/display-name
        setBanner(() => () => <SliderContentVer2 page="Contact Me" />);
        break;
      case "/blog/personal":
        // eslint-disable-next-line react/display-name
        setBanner(() => () => <SliderContentVer2 page="Personal" />);
        break;
      default:
        // eslint-disable-next-line react/display-name
        setBanner(() => () => <SliderContentVer2 page="Not valid page" />); // Default to null if no match
    }
  };

  const handlePLBanner = () => {
    const blogBanner = document.querySelector(".blog-content") as HTMLElement;
    if (blogBanner && plHeader) {
      blogBanner.style.paddingLeft = `${plHeader}`;
    }
  };

  useEffect(() => {
    if (pathName) {
      handleBanner(pathName);
    }
  }, [pathName]);

  useEffect(() => {
    if (plHeader) {
      handlePLBanner();
    }
  }, [plHeader]);

  return (
    <BlogBannerWrapper>
      <div className="w-full flex">
        <div className="w-1/2 absolute-black blog-content">
          {/* Render the Banner component only if it's set */}
          {Banner && <Banner />}
        </div>
        <img alt="bannerImg" src={`${process.env.basePath}/img/blogBanner.jpg`} className="w-1/2" />
      </div>
    </BlogBannerWrapper>
  );
};

export default BlogBanner;
