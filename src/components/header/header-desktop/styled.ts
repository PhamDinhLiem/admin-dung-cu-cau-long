import { Container } from "@/styles/common";
import { device } from "@/styles/media";
import styled from "styled-components";

export const HeaderDesktopWrapper = styled.div`
  width: 100%;
  //position: fixed;
  z-index: 999;
`;

export const HeaderDesktopContent = styled(Container)`
  width: 100%;
  display: flex;
  margin-left: 3%;
  max-width: 1240px;
  margin-right: 20px;
  align-items: center;
  padding-left: 0px !important;
  padding-right: 0px !important;
  justify-content: space-between;

  @media ${device.mobile} {
    padding: 8px 16px;
  }

  @media (max-width: 1200px) {
    max-width: 1040px;
  }

  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const MenuList = styled.div<{}>`
  display: flex;
  align-items: center;

  height: 65px;
  gap: 40px;
  /* justify-content: space-between; */
  transition: all 0.3s ease;
  a {
    flex-shrink: 0;
  }
`;

export const MenuItem = styled.div<{ $active: boolean; $isHavePathName?: boolean }>`
  cursor: pointer;
  position: relative;

  h3,
  h4 {
    font-size: 16px;
  }

  h1,
  h2 {
    font-weight: 700;
    text-transform: capitalize;
  }

  h3,
  h4:hover {
    color: ${({ theme }) => theme.color.status.yellow} !important;
    border-bottom: 1px solid ${({ theme }) => theme.color.status.yellow} !important;
  }

  height: 100%;
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
