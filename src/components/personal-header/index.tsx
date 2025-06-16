"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { PersonalHeaderMobile, PersonalMenuItem, PersonHeaderWrapper } from "./styled";
import AppContext from "@/contexts/app";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { handlePathName } from "@/screens/blog-personal-subcategory";

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
  const router = useRouter();
  const pathName = usePathname();
  const [rectTop, setRectTop] = useState<any>(null);
  const personHeaderRef = useRef<HTMLDivElement>(null);
  const mobileHeaderContentRef = useRef<HTMLDivElement>(null);
  const [isOpenMb, setIsOpenMb] = useState<boolean>(false); // state này để biết có đang dropdown bên mobile không
  const [scrollPoint, setScrollPoint] = useState<number>(0);
  const { personalState, setPersonalState } = useContext(AppContext);

  //Xử lý chuyển trang header menu
  const handleOnClick = (e: any, pathName: string, title: string) => {
    //Chặn event tự động chạy
    e.preventDefault();

    // lấy phần cuối của url
    const lastPath = handlePathName(pathName);

    //lastPath không phải personal thì chuyển trang
    if (lastPath != "personal") {
      router.push("/blog/personal");
    }

    const willOpen = !isOpenMb;
    setIsOpenMb(willOpen); //đóng menu
    openOrClose(willOpen);

    setPersonalState(title);
  };

  //Xử lý dropDown cho menu Mobile
  const handleDropDown = (e: React.MouseEvent) => {
    e.preventDefault(); // <-- gọi đúng

    // Toggle trạng thái
    const willOpen = !isOpenMb;
    setIsOpenMb(willOpen);

    openOrClose(willOpen);
  };

  //Thực hiện logic đóng mở
  const openOrClose = (isOpen: boolean) => {
    if (!mobileHeaderContentRef.current) return;

    if (isOpen) {
      mobileHeaderContentRef.current.style.display = "block";
      mobileHeaderContentRef.current.style.animation = "dropDown 0.5s ease-in-out forwards";
    } else {
      mobileHeaderContentRef.current.style.animation = "dropUp 0.5s ease-in-out forwards";
    }
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
      {/* Header cho desktop */}
      {rectTop == 0 && rectTop != undefined ? (
        <div className="flex w-full h-[64px] bigger-animation justify-center relative items-center header-content hide-mobile">
          <h2 className="appear-animation absolute nodisplay">Miracle</h2>
          <div className="max-w-[1040px] w-full flex justify-between items-center bigger-animation2 tablet-implements ">
            {PersonalMenu.map((perMenu, index: number) => (
              <PersonalMenuItem
                key={index}
                className={perMenu.slug == personalState ? `bg-focus` : ``}
                onClick={(e: any) => {
                  handleOnClick(e, pathName, perMenu.slug);
                }}
              >
                <p className="text-[18px]">{perMenu.title}</p>
              </PersonalMenuItem>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex max-w-[1140px] h-[52px] w-full header-content top-0! tablet-implements ">
          {PersonalMenu.map((perMenu, index) => (
            <PersonalMenuItem
              key={index}
              className={perMenu.slug == personalState ? `bg-focus` : ``}
              onClick={(e) => {
                handleOnClick(e, pathName, perMenu.slug);
              }}
            >
              <p>{perMenu.title}</p>
            </PersonalMenuItem>
          ))}
        </div>
      )}
      {/* Header cho mobile */}
      <PersonalHeaderMobile>
        <div className="mb-lay flex flex-col">
          {/* phần menubar cho header mobile */}
          <div className="h-[64px] flex w-full items-center justify-center relative ">
            <p className="text-xl uppercase font-semibold ">Personal Menu</p>
            {/* nút dropdown cho mobile */}
            <button className={`absolute right-2`} onClick={(e: any) => handleDropDown(e)}>
              <svg
                width={30}
                height={30}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${isOpenMb ? "rotate-180" : ""}`}
              >
                <path d="M4 7L9 12L14 7" stroke={"black"} strokeLinecap="square" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {/* phần menu content khi dropdown được bấm */}
          <div className="display-none mobile-content" ref={mobileHeaderContentRef}>
            {PersonalMenu.map((perMenu, index: number) => (
              <PersonalMenuItem
                key={index}
                className={perMenu.slug == personalState ? `bg-focus` : ``}
                onClick={(e: any) => {
                  handleOnClick(e, pathName, perMenu.slug);
                }}
              >
                <p className="text-[18px]">{perMenu.title}</p>
              </PersonalMenuItem>
            ))}
          </div>
        </div>
      </PersonalHeaderMobile>
    </PersonHeaderWrapper>
  );
};
export default PersonalHeader;
