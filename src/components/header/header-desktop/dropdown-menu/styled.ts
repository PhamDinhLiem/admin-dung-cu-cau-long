import Link from "next/link";
import styled from "styled-components";

export const DropdownMenuWrapper = styled.div``;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const DropDownWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  top: 120%;
  min-width: 120px;

  z-index: 100;
  display: flex;
  flex-direction: column;

  background-color: #f7f7f7;

  h3,
  h4 {
    cursor: pointer !important;
    font-size: 16px;
  }
`;

export const ButtonItem = styled.button`
  text-align: start;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 6px;
  color: black;
  width: 100%;
  text-transform: capitalize;
  :not(:last-child) {
    margin-bottom: 16px;
  }
  p {
    font-weight: 500;
    padding: 5px;
  }

  h5,
  h6 {
    font-family: var(--blog-medium-font) !important;
    font-size: 16px;
  }

  :hover {
    color: ${({ theme }) => theme.color.status.yellow};
  }
`;

export const WrapperTitle = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;

  h3,
  h4 {
    cursor: pointer !important;
  }

  p {
    font-size: 16px !important;
  }

  svg {
    transition: 0.3s all ease-in-out;
    transform: ${({ show }) => (show ? "rotate(0deg)" : "rotate(-180deg) ")};
  }
`;
