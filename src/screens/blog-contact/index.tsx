"use client";

import { ContainerBlog } from "@/styles/blogs";
import { BlogContactScreenWrapper } from "./styled";
import CustomButton from "@/components/custom-button";
import { CustomInputVer1, CustomInputVer2 } from "@/components/custom-input";

const BlogContactScreen = () => {
  return (
    <ContainerBlog>
      <BlogContactScreenWrapper>
        <img alt="contactImg" src={`${process.env.basePath}/img/blogBanner.jpg`} className="w-6/12" />
        <div className="w-6/12 flex flex-col gap-3">
          <h2>Name *</h2>
          <CustomInputVer1 placeholder="Name" type="text" />
          <h2>Email *</h2>
          <CustomInputVer1 placeholder="Email" type="email" />
          <h2>Subject *</h2>
          <CustomInputVer1 placeholder="Subject" type="text" />
          <h2>Comments *</h2>
          <CustomInputVer2 placeholder="Comments" type="textarea" classname="h-[200px]" />
          <CustomButton classname={"w-fit bg-black px-8 py-3 rounded-md"}>
            <p className="text-white font-semibold">SUBMIT</p>
          </CustomButton>
        </div>
      </BlogContactScreenWrapper>
    </ContainerBlog>
  );
};
export default BlogContactScreen;
