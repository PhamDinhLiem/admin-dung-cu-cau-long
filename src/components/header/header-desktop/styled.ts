import { Container } from "@/styles/common";
import { device } from "@/styles/media";
import styled from "styled-components";

export const HeaderDesktopWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.status.primary};
`;

export const HeaderDesktopContent = styled(Container)`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    padding: 8px 16px;
  }
`;

export const MenuList = styled.div<{}>`
  display: flex;
  align-items: center;

  height: 65px;
  gap: 24px;
  /* justify-content: space-between; */
  transition: all 0.3s ease;
  a {
    flex-shrink: 0;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }
`;

export const MenuItem = styled.div<{ $active: boolean; $isHavePathName?: boolean }>`
  cursor: pointer;
  position: relative;

  p {
    font-weight: 700;
    font-family: var(--font-lora) !important;

    position: relative;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    color: ${({ theme, $active, $isHavePathName }) =>
      $active ? theme.color.status.yellow : $isHavePathName ? theme.color.status.white : theme.color.text.body};
  }

  p:hover {
    color: ${({ theme }) => theme.color.status.yellow} !important;
  }

  height: 100%;
  text-transform: uppercase;
  transition: all 0.3s ease;

  /* border-right: 1px solid black; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchLanguage = styled.div`
  position: relative;
  padding: 0px 8px;
  width: 170px;
  height: 100%;

  /* padding: 0px 8px; */
  display: flex;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.color.status.primary};
`;

export const IconLanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.color.button.active};
  /* cursor: pointer; */

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
  top: 42px;
  gap: 12px;

  display: flex;
  position: absolute;
  flex-direction: column;

  z-index: 1;
  padding: 6px 9px;
  background: #ffffff;

  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.12);

  label {
    display: block;
    font-weight: 500;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
