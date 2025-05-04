import React from "react";
import Sidebar from "../components/Sidebar";
import { LayoutBlogsWrapper } from "./styled";
import Header from "@/components/header";
import BlogBanner from "@/components/customBanner";

export default function LayoutBlogs({ children }: any) {
  return (
    <LayoutBlogsWrapper>
      <div className="wrapper-box" style={{ position: "relative" }}>
        <Header />
        <BlogBanner />
        <div className="content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="sm:col-span-12 md:col-span-9">{children}</div>
            <div className="sm:col-span-12 md:col-span-3">
              <div className="lg:stickey relative to-8">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBlogsWrapper>
  );
}
