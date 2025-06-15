"use client";

import { ContainerBlog } from "@/styles/blogs";
import { BlogContactScreenWrapper } from "./styled";
import CustomButton from "@/components/custom-button";
import { CustomInputVer1, CustomInputVer2 } from "@/components/custom-input";

const BlogContactScreen = () => {
  return (
    <ContainerBlog>
      <BlogContactScreenWrapper>
        <div className="max-w-[1080px] flex  gap-7 flexing-col">
          <img alt="contactImg" src={`${process.env.basePath}/img/blogBanner.jpg`} className="w-[46%] mb-w-full" />
          <div className="w-6/12 flex flex-col gap-2 mb-w-full ">
            <h3>Name *</h3>
            <CustomInputVer1 placeholder="Name" type="text" />
            <h3>Email *</h3>
            <CustomInputVer1 placeholder="Email" type="email" />
            <h3>Subject *</h3>
            <CustomInputVer1 placeholder="Subject" type="text" />
            <h3>Comments *</h3>
            <CustomInputVer2 placeholder="Comments" type="textarea" classname="h-[200px]" />
            <CustomButton classname={"w-fit bg-black px-8 py-3 mt-5 rounded-md"}>
              <p className="text-white font-semibold">SUBMIT</p>
            </CustomButton>
          </div>
        </div>
      </BlogContactScreenWrapper>
    </ContainerBlog>
  );
};
export default BlogContactScreen;
