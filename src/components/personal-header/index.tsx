"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { PersonalMenuItem, PersonHeaderWrapper } from "./styled";
import AppContext from "@/contexts/app";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

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
    slug: "lifestyle",
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
  const personHeaderRef = useRef<HTMLDivElement>(null);
  const [rectTop, setRectTop] = useState<any>(null);
  const [scrollPoint, setScrollPoint] = useState<number>(0);
  const { personalState, setPersonalState } = useContext(AppContext);
  const pathName = usePathname();
  //const router = useRouter();

  const handleOnChange = (e: MouseEvent, pathName: string, title: string) => {
    e.preventDefault;
  };

  useEffect(() => {
    if (personHeaderRef) {
      setRectTop(personHeaderRef.current?.getBoundingClientRect().top!);
    }
  }, [personHeaderRef, scrollPoint]);

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
    <PersonHeaderWrapper ref={personHeaderRef}>
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
                  setPersonalState(perMenu.title);
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
                setPersonalState(perMenu.slug);
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
