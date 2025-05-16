"use client";

import { Fragment, useContext, useMemo } from "react";
import { BlogPersonalScreenWrapper } from "./styled";
import PersonalHeader from "@/components/personal-header";
import BlogPersonalOverview from "../blog-personal-overview";
import BlogPersonalLatestNews from "../blog-personal-latest-news";
import BlogPersonalBusiness from "../blog-personal-business";
import AppContext from "@/contexts/app";
import BlogPersonalResources from "../blog-personal-resources";

const BlogPersonalScreen = () => {
  const { personalState } = useContext(AppContext);

  //Render component dựa vào title
  const BlogPersonal = useMemo(() => {
    switch (personalState) {
      case "Overview":
        return BlogPersonalOverview;
      case "Latest News":
        return BlogPersonalLatestNews;
      case "Business":
        return BlogPersonalBusiness;
      case "Market":
        return BlogPersonalBusiness;
      case "Education":
        return BlogPersonalBusiness;
      case "LifeStyle":
        return BlogPersonalBusiness;
      case "Resources":
        return BlogPersonalResources;
    }
    return Fragment;
  }, [personalState]);
  return (
    <BlogPersonalScreenWrapper>
      <PersonalHeader />
      <BlogPersonal />
    </BlogPersonalScreenWrapper>
  );
};

export default BlogPersonalScreen;
