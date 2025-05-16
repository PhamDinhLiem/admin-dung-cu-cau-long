"use client";

import { Fragment, useContext, useMemo } from "react";
import { BlogPersonalScreenWrapper } from "./styled";
import PersonalHeader from "@/components/personal-header";
import BlogPersonalOverview from "../blog-personal-overview";
import BlogPersonalLatestNews from "../blog-personal-latest-news";
import BlogPersonalBusiness from "../blog-personal-business";
import AppContext from "@/contexts/app";
import BlogPersonalResources from "../blog-personal-resources";
import BlogPersonalLifeStyle from "../blog-personal-lifestyle";
import BlogPersonalEducation from "../blog-personal-education";

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
        return BlogPersonalBusiness; // để tạm
      case "Education":
        return BlogPersonalEducation;
      case "LifeStyle":
        return BlogPersonalLifeStyle;
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
