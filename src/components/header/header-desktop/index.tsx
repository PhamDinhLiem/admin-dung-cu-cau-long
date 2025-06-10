"use client";

import { LinkProps } from "@/@custom-types";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import DropdownMenu from "./dropdown-menu";
import { HeaderDesktopContent, HeaderDesktopWrapper, MenuItem, MenuList } from "./styled";
import { Flex } from "@/styles/common";
import AppContext from "@/contexts/app";
import useWindowResize from "@/hooks/use-window-resize";

export type HeaderProps = {
  data: LinkProps[] | undefined;
  showInput: boolean;
  setShowInput: Dispatch<SetStateAction<boolean>>;
};

const HeaderDesktop = ({ data, showInput, setShowInput }: HeaderProps) => {
  const pathName = usePathname();
  const size: any = useWindowResize();
  const [showDropdown, setShowDropdown] = useState("");
  const { setPlHeader } = useContext(AppContext);

  const getPlHeader = () => {
    const headerWrapper = document.querySelector(".hide-mobile") as HTMLElement;
    const header = headerWrapper?.querySelector("div") as HTMLElement;
    const style = window.getComputedStyle(header);
    const plLeft = style.marginLeft;
    setPlHeader(plLeft);
  };

  useEffect(() => {
    getPlHeader();
  }, [size]);

  return (
    <HeaderDesktopWrapper className="hide-mobile py-1">
      <HeaderDesktopContent>
        <Flex>
          <Link href={"/blog"}>
            <h2 className="text-[30px]">Miracle</h2>
          </Link>
        </Flex>
        {/* showInput ? <HeaderInput setShowInput={setShowInput} /> : <div></div>*/}
        <MenuList>
          {data?.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <DropdownMenu
                  showDropdown={showDropdown}
                  setShow={setShowDropdown}
                  data={item.children}
                  title={item.label}
                  value={item.value}
                  pathName={pathName}
                />
              ) : (
                <Link href={item.href ?? ""} key={index}>
                  <MenuItem className="text-lg" $active={pathName == item.href} $isHavePathName={pathName.length > 0}>
                    <p className="text-gray-500 cursor-pointer">{item.label}</p>
                  </MenuItem>
                </Link>
              )}
            </div>
          ))}

          {/* <ButtonIcon onClick={() => setShowInput(true)}>
            <Icons icon="icon-search" stroke="white" />
          </ButtonIcon> */}
        </MenuList>
        {/* )} */}
      </HeaderDesktopContent>
    </HeaderDesktopWrapper>
  );
};

export default HeaderDesktop;
