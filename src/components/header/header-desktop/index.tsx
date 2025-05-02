"use client";

import { LinkProps } from "@/@custom-types";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import DropdownMenu from "./dropdown-menu";
import { HeaderDesktopContent, HeaderDesktopWrapper, MenuItem, MenuList } from "./styled";
import HeaderInput from "../header-input";
import { Flex } from "@/styles/common";

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
            <h2>Tan Hiep</h2>
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
                />
              ) : (
                <Link href={item.href ?? ""} key={index}>
                  <MenuItem className="text-lg" $active={pathname == item.href} $isHavePathName={pathname.length > 0}>
                    <h4>{item.label}</h4>
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
