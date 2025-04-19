"use client";

import { BlogScreenWrapper } from "./styled";

interface BlogScreenProps {
  blogs: any;
}
const initialState = {
  message: "",
};

const BlogScreen = ({ blogs }: BlogScreenProps) => {
  return <BlogScreenWrapper>blogs</BlogScreenWrapper>;
};

export default BlogScreen;
