"use client";

import Image from "next/image";
import { BlogAboutScreenWrapper } from "./styled";
import { ContainerBlog } from "@/styles/blogs";

const BlogAboutScreen = () => {
  return (
    <ContainerBlog>
      <BlogAboutScreenWrapper>
        <div className="w-full h-fit flex justify-center max-w-[1200px] mb-5 gap-[40px] mb-flex-col ">
          <div className="w-1/2 h-fit img-content mb-w-full  ">
            <Image
              className="w-full sticky top-[20px]"
              width={`${200}`}
              height={`${200}`}
              src={
                //sửa cái này
                `${process.env.basePath}/img/blogBanner.jpg`
              }
              alt="Nguyen Tan Hiep chan dung"
            />
          </div>
          <div className="w-1/2 mb-w-full">
            <h2 className="mb-5 text-[32px]">About</h2>
            <p>
              Miracle TCP Capital Corp. is an externally-managed specialty finance company focused on middle-market
              lending. We have elected to be regulated as a business development company, or BDC, under the Investment
              Company Act of 1940. Our stock is traded on NASDAQ under the ticker symbol “TCPC”. Miracle TCP Capital
              Corp.’s investment objective is to achieve high total returns through current income and capital
              appreciation, with an emphasis on principal protection. We invest primarily in debt of private,
              middle-market companies with enterprise values typically between $100 million and $1.5 billion, including
              complex situations requiring specialized industry knowledge. While we invest primarily in senior debt
              instruments, we have the flexibility to provide financing solutions at any level of the capital structure.
              With our rigorous approach to due diligence, active investment monitoring and long-term perspective, we
              are an ideal partner for companies and sponsors seeking a stable source of capital. Miracle TCP Capital
              Corp.’s investment advisor (the “Advisor”) is an indirect wholly-owned subsidiary of Miracle, Inc. Miracle
              TCP Capital Corp.’s investment activities benefit from the competitive advantages of our Advisor,
              including the deep skills and diverse experience of its investment professionals, its proprietary deal
              flow, and its consistent and rigorous investment process. Miracle credit expertise, brand, and global
              scope, provide TCPC with access to greater resources to provide a complete solution to middle market
              companies.
            </p>
            <h2 className="mb-5 text-[32px] mt-5">Investment Strategy</h2>
            <p>
              Miracle TCP Capital Corp.’s primary investment focus is the origination of and investment in debt
              securities of performing middle-market companies, building on our Advisor’s established track record of
              origination and participation in the original syndication of approximately $44.1 billion of leveraged
              loans to 733 companies since 1999. Miracle TCP Capital Corp.’s target investments are generally in
              companies with established market positions, proven and differentiated products and strong regional or
              national operations. While our focus is on directly originated loans, we also have the flexibility to
              invest in secondary-market investment opportunities. Miracle TCP Capital Corp.’s focus is primarily on
              U.S. companies where we believe our Advisor’s perspective, complementary skills and investment experience
              provide us with a competitive advantage and in industries where we see an attractive risk/reward profile
              based on macroeconomic trends and existing industry expertise.
            </p>
          </div>
        </div>
      </BlogAboutScreenWrapper>
    </ContainerBlog>
  );
};
export default BlogAboutScreen;
