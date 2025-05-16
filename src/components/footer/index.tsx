"use client";

import { useState } from "react";
import { EmailContentWrapper, FooterWrapper, InvestorContactContentWrapper, MangageContentWrapper } from "./styled";
import CustomButton from "../custom-button";

const currentYear = new Date().getFullYear();

const checkOutLink = ["General Release", "Calendar Events", "All SEC Fillings", "Quartely and Anual Reports"];

export function Footer() {
  const [email, setEmail] = useState<string>("");
  return (
    <FooterWrapper>
      <footer className="layout_footer flex flex-col justify-center w-full max-w-[1080px] px-[30px]">
        <div className="footer_iner footer_content">
          <InvestorContactContentWrapper>
            <h4 className="font-bold">Investor Contact</h4>
            <p className="mt-3">Nguyen Tan Hiep</p>
            <p>Investor Relations</p>
            <div className="flex gap-1 items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="cursor-pointer border-b border-transparent   hover:border-b hover:border-orange-500">
                nguyentanhiep@gmail.com
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <p className="cursor-pointer   hover:border-b hover:border-orange-500">+84 352760309</p>
            </div>
          </InvestorContactContentWrapper>
          <EmailContentWrapper>
            <h4 className="font-bold">Email Alert</h4>
            <div className="flex mt-3 gap-3">
              <input
                className="ipn-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <CustomButton classname={"h-full w-[120px] bg-white px-4 rounded-sm flex items-center"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-5 text-orange-500  "
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-black mt-1 font-bold ">SUBMIT</p>
              </CustomButton>
            </div>
            <div className="checkout_section gap-1 mt-5">
              {checkOutLink.map((checkBox, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input className="ipn_checkbox" type="checkbox" />
                  <p>{checkBox}</p>
                </div>
              ))}
            </div>
          </EmailContentWrapper>
          <MangageContentWrapper className="pl-[40px]">
            <h2 className="font-bold">Tan Hiep </h2>
            <p className="mt-3 font-semibold">Manage Cookies</p>
          </MangageContentWrapper>
        </div>
        <div className="footer_iner footer_subcontent">
          <p className="font-bold">© 2025 NTH Capital Corp.</p>
          <p className="font-bold">Powered By Q4 Inc. 5.152.0.2</p>
        </div>
      </footer>
    </FooterWrapper>
  );
}
