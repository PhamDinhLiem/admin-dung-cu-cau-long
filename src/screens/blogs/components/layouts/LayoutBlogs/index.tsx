import Banner from "../components/Banner";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { LayoutBlogsWrapper } from "./styled";

export default function LayoutBlogs({ children }: any) {
  return (
    <LayoutBlogsWrapper>
      <div className="wrapper-box" style={{ position: "relative" }}>
        <Header />
        <Banner />

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
