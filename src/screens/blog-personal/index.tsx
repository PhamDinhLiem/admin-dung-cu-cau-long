"use client";

import { BlogPersonalScreenWrapper } from "./styled";
import PersonalHeader from "@/components/personal-header";

const BlogPersonalScreen = () => {
  return (
    <BlogPersonalScreenWrapper>
      <PersonalHeader />
      <div className="h-[900px]"></div>
    </BlogPersonalScreenWrapper>
  );
};

export default BlogPersonalScreen;
