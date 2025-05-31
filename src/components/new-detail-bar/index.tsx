"use client";

import { NewDetailBarWrapper } from "./styled";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { GiPresent } from "react-icons/gi";
import { useEffect, useState } from "react";

//Hàm đọc văn bản
const readTex = (text: string) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Có thể thiết lập các thuộc tính như giọng đọc, tốc độ, âm lượng...
    utterance.lang = "en-US"; // hoặc 'vi-VN' nếu tiếng Việt
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ chức năng đọc văn bản.");
  }
};

interface NewDetailBarProps {
  title: string;
  category: string;
  subcategory: string;
  slug: string;
  intro: string;
  extablishedDate: Date;
  featuredImage: {
    url: string;
    height: number;
    width: number;
  };
  content: {
    raw: {
      children: {
        type: string;
        children: {
          text: string;
          bold: string;
        }[];
      }[];
    };
  };
  author: {
    name: string;
    bio: string;
    photo: {
      url: string;
    };
    title: string;
  };
}

const NewDetailBar = ({ NewDetail }: { NewDetail: NewDetailBarProps }) => {
  const [isRead, setIsRead] = useState<boolean>(false);
  const [currentReadIndex, setCurrentReadIndex] = useState<any>(0);
  const [isReading, setIsReading] = useState<boolean>(true);
  const [readList, setReadList] = useState<any>([]);

  //Chưa xử lý logic cho đọc
  const handleRead = (e: any) => {
    e.preventDefault();
    setIsRead(!isRead);
  };

  useEffect(() => {
    setReadList(NewDetail.content.raw.children);
  }, [currentReadIndex]);

  useEffect(() => {
    console.log(readList);
  }, [readList]);

  useEffect(() => {
    console.log(NewDetail);
  }, []);

  return (
    <NewDetailBarWrapper>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center size-9 border-2 rounded-full text-gray-600 hover:bg-black hover:text-white">
          {isRead ? (
            <FaPause
              fontSize={14}
              onClick={(e) => {
                handleRead(e);
              }}
            />
          ) : (
            <FaPlay
              fontSize={10}
              onClick={(e) => {
                handleRead(e);
              }}
            />
          )}
        </div>
        <p className="font-semibold">Listen to this article</p>
      </div>
      <div className="flex gap-2 ">
        <div className="flex gap-2 items-center  px-3 border-2 rounded-full text-gray-600 hover:bg-black hover:text-white ">
          <GiPresent fontSize={18} />
          <p className="font-semibold">Share full article</p>
        </div>
        <div className="flex justify-center items-center size-9 border-2 rounded-full text-gray-600 hover:bg-black hover:text-white">
          <FaShare fontSize={14} />
        </div>
        <div className="flex justify-center items-center size-9 border-2 rounded-full text-gray-600 hover:bg-black hover:text-white ">
          <CiBookmark fontSize={14} />
        </div>
      </div>
    </NewDetailBarWrapper>
  );
};
export default NewDetailBar;
