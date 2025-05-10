"use client";

import { useEffect, useState } from "react";
import { PersonalMenuItem, PersonHeaderWrapper } from "./styled";
import { head } from "lodash";

interface PersonaHeaderProps {
  slug?: string;
}

const PersonalMenu = [
  {
    title: "Overview",
    slug: "overview",
    href: "",
  },
  {
    title: "Latest News",
    slug: "latest-news",
    href: "",
  },
  {
    title: "Market",
    slug: "market",
    href: "",
  },
  {
    title: "Business",
    slug: "business",
    href: "",
  },
  {
    title: "LifeStyle",
    slug: "life-style",
    href: "",
  },
  {
    title: "Education",
    slug: "education",
    href: "",
  },
  {
    title: "Resources",
    slug: "resources",
    href: "",
  },
];

const PersonalHeader = ({ slug }: PersonaHeaderProps) => {
  const [scrollPoint, setScrollPoint] = useState(0);
  //sửa hàm này
  const handleScrollTop = () => {
    const header = document.querySelector(".header-content") as HTMLElement;
    const headerPostion = header.style.position;
    console.log(headerPostion);
  };

  useEffect(() => {
    console.log(scrollPoint);
    handleScrollTop();
  }, [scrollPoint]);

  return (
    <PersonHeaderWrapper>
      <div className="flex max-w-[1080px] h-[52px] w-full header-content">
        {PersonalMenu.map((perMenu, index) => (
          <PersonalMenuItem key={index} $active $isHavePathName>
            <p>{perMenu.title}</p>
          </PersonalMenuItem>
        ))}
      </div>
    </PersonHeaderWrapper>
  );
};
export default PersonalHeader;
