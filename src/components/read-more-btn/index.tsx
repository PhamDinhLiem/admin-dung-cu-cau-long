"use client";

import AppContext from "@/contexts/app";
import { ReadMoreButtonWrapper } from "./styled";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface ReadMoreButtonProps {
  link: string;
  title?: string;
  state?: string;
}

const ReadMoreButton = ({ link, state, title }: ReadMoreButtonProps) => {
  const router = useRouter();
  const { setPersonalState } = useContext(AppContext);

  // Hàm xử lý khi click vào
  const handleClick = (e: any, link: string, state?: string) => {
    e.preventDefault();

    //Xủ lý riêng cho các phần trong menu personal
    if (state) {
      setPersonalState(state);
    }

    router.push(link);
  };

  return (
    <ReadMoreButtonWrapper
      onClick={(e) => {
        handleClick(e, link, state);
      }}
      className="border-b-2 border-transparent hover:border-orange-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-5 text-orange-500 -ml-[8px]"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      </svg>
      <p className="uppercase font-bold cursor-pointer ">{title ? title : "Read More"}</p>
    </ReadMoreButtonWrapper>
  );
};
export default ReadMoreButton;
