"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { PersonalMenuItem, PersonHeaderWrapper } from "./styled";
import AppContext from "@/contexts/app";

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
  const PersonHeaderRef = useRef<HTMLDivElement>(null);
  const rectTop = PersonHeaderRef.current?.getBoundingClientRect().top!;
  const [scrollPoint, setScrollPoint] = useState<number>(0);
  const { personalState, setpersonalState } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPoint(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPoint]);

  return (
    <PersonHeaderWrapper ref={PersonHeaderRef}>
      {rectTop == 0 && rectTop != undefined ? (
        <div className="flex w-full h-[64px] bigger-animation justify-center relative items-center header-content">
          <h2 className="appear-animation absolute ">Miracle</h2>
          <div className="max-w-[1040px] w-full flex justify-between items-center bigger-animation2 ">
            {PersonalMenu.map((perMenu, index) => (
              <PersonalMenuItem
                key={index}
                className={perMenu.title == personalState ? `bg-focus` : ``}
                onClick={(e) => {
                  e.preventDefault;
                  setpersonalState(perMenu.title);
                }}
              >
                <p className="text-[18px]">{perMenu.title}</p>
              </PersonalMenuItem>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex max-w-[1140px] h-[52px] w-full header-content">
          {PersonalMenu.map((perMenu, index) => (
            <PersonalMenuItem
              key={index}
              className={perMenu.title == personalState ? `bg-focus` : ``}
              onClick={(e) => {
                e.preventDefault;
                setpersonalState(perMenu.title);
              }}
            >
              <p>{perMenu.title}</p>
            </PersonalMenuItem>
          ))}
        </div>
      )}
    </PersonHeaderWrapper>
  );
};
export default PersonalHeader;
