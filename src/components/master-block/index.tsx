import React from "react";
import { MasterBlockItemWrapper } from "./styled";
import { HomeownerOutput } from "@/@custom-types/graphql";
import Link from "next/link";

interface MasterItemProps {
  item: HomeownerOutput;
}

const MasterBlock: React.FC<MasterItemProps> = ({ item }) => {
  return (
    <MasterBlockItemWrapper className="flex flex-col wrapper w-full">
      <div className="flex flex-row items-center pt-2.5 pl-0.5 w-full">
        <div>
          <img
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${item.image.data.attributes.url}`}
            alt={item.name}
            className="mainImg"
          />
        </div>

        <div className="text-base font-semibold title blue">Chủ nhà {item.name}</div>
      </div>

      <div className="text-sm description font-semibold ">{item.description}</div>
      <div className="text-sm font-semibold ">Mức lương: {item.sallary} VND</div>
      <div className="text-sm font-semibold">Khu vực: {item.location}</div>

      <ul className="flex flex-wrap justify-end items-center mt-16">
        <li className="">
          <Link
            href="/dang-ky-thong-tin/dang-ky-giup-viec"
            className="bg-yellow inline-flex items-end justify-center rounded-md  px-2 py-2 text-center text-base font-medium text-white hover:opacity-80 lg:px-2"
          >
            Tư vấn ngay!
          </Link>
        </li>
      </ul>
    </MasterBlockItemWrapper>
  );
};

export default MasterBlock;
