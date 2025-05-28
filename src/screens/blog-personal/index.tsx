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

  //Render
  const BlogPersonal = useMemo(() => {
    switch (personalState) {
      case "overview":
        return BlogPersonalOverview;
      case "latest-news":
        return BlogPersonalLatestNews;
      case "business":
        return BlogPersonalBusiness;
      case "market":
        return BlogPersonalBusiness; // để tạm
      case "education":
        return BlogPersonalEducation;
      case "lifeStyle":
        return BlogPersonalLifeStyle;
      case "resources":
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
