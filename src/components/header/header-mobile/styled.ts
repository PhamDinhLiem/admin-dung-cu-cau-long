import { Flex } from "@/styles/common";
import { device } from "@/styles/media";
import Link from "next/link";
import styled, { css } from "styled-components";

export const HeaderMobileWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  /* border-top: 1px solid black; */
  justify-content: center;
`;

export const HeaderMobileContent = styled.div`
  padding: 16px;
  width: 100%;
  gap: 16px;
  display: flex;
  justify-content: start;
  align-items: center;

  background-color: ${({ theme }) => theme.color.status.primary};
`;

export const MenuList = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.status.primary};
`;

export const MenuItem = styled.h5<{ $active: boolean }>`
  position: relative;

  font-size: 28px;
  font-weight: 700;
  line-height: 100%;
  text-transform: capitalize;

  user-select: none;
  color: ${({ theme, $active }) => ($active ? theme.color.status.yellow_20 : "#ffffff")};

  text-decoration: none;

  @media ${device.mobile} {
    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const SwitchLanguage = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

export const IconLanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h6 {
    width: 20px;
  }

  gap: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageItemWrapper = styled.div`
  gap: 12px;
  padding: 6px 9px;

  top: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;

  background: #ffffff;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.12);

  label {
    display: block;
    font-weight: 500;
  }
`;

export const MobileLangWrapper = styled.div<{ $active: boolean }>`
  position: absolute;
  left: -16px;
  width: calc(100% + 32px);

  background-color: #fff;
  height: 132px;
  bottom: -16px;

  padding: 16px;
  z-index: 1200;

  #close {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  ${({ $active }) =>
    $active
      ? css`
          transform: translateY(0%);
        `
      : css`
          transform: translateY(100%);
        `}

  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const ButtonMenu = styled.button<{ open: boolean }>`
  min-width: 100%;
  color: white;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  font-family: var(--font-lora);
  text-transform: initial;
  justify-content: space-between;

  svg {
    height: 24px;
    width: 24px;
    margin-left: 4px;
    transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const ProductMenuList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const ItemMenuProduct = styled(Link)`
  color: white;

  &:not(:first-child) {
    margin-top: 10px;
  }

  @media ${device.mobile} {
    p {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
