"use client";

import { LinkProps } from "@/@custom-types";
import { Flex } from "@/styles/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import DropdownMenu from "./dropdown-menu";
import { HeaderDesktopContent, HeaderDesktopWrapper, MenuItem, MenuList } from "./styled";

export type HeaderProps = {
  data: LinkProps[] | undefined;
  showInput: boolean;
  setShowInput: Dispatch<SetStateAction<boolean>>;
};

const HeaderDesktop = ({ data, showInput, setShowInput }: HeaderProps) => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState("");

  return (
    <HeaderDesktopWrapper className="hide-mobile">
      <HeaderDesktopContent>
        <Flex>
          <Link href={"/"}>
            <img width={130} src={`${process.env.basePath}/img/logo_homeease.png`} alt="" />
          </Link>
        </Flex>
        {/* {showInput ? (
          <HeaderInput setShowInput={setShowInput} />
        ) : ( */}
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
                />
              ) : (
                <Link href={item.href ?? ""} key={index}>
                  <MenuItem $active={pathname == item.href} $isHavePathName={pathname.length > 0}>
                    <p>{item.label}</p>
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
