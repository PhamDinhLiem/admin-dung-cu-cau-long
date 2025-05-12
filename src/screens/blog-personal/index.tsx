"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { BlogPersonalScreenWrapper } from "./styled";
import PersonalHeader from "@/components/personal-header";
import BlogPersonalOverview from "../blog-personal-overview";
import BlogPersonalLatestNews from "../blog-personal-latest-news";

interface BlogPersonalScreenProps {
  personalTitle?: string;
}

const BlogPersonalScreen = ({ personalTitle }: BlogPersonalScreenProps) => {
  const [title, setTitle] = useState<string>("Overview");

  //Nếu có truyền title vào thì set title
  useEffect(() => {
    if (personalTitle) {
      setTitle(personalTitle);
    }
  }, [personalTitle]);

  //Render component dựa vào title
  const BlogPersonal = useMemo(() => {
    switch (title) {
      case "Overview":
        return BlogPersonalOverview;
      case "Latest News":
        return BlogPersonalLatestNews;
    }

    return Fragment;
  }, [title]);
  return (
    <BlogPersonalScreenWrapper>
      <PersonalHeader />
      <BlogPersonal />
    </BlogPersonalScreenWrapper>
  );
};

export default BlogPersonalScreen;
