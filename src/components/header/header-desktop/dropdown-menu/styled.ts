import Link from "next/link";
import styled from "styled-components";

export const DropdownMenuWrapper = styled.div``;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const DropDownWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  top: 231%;
  left: -50px;
  min-width: 200px;

  z-index: 100;
  display: flex;
  flex-direction: column;

  overflow: auto;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.status.white};
`;

export const ButtonItem = styled(Link)`
  padding: 0px !important;
  text-align: center;
  color: black;
  width: 100%;

  text-transform: capitalize;

  :not(:last-child) {
    margin-bottom: 16px;
  }

  :hover {
    color: ${({ theme }) => theme.color.status.yellow};
  }
  p {
    font-weight: 500;
    padding: 14px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.status.gray3};
  }
`;

export const WrapperTitle = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1px;

  p {
    font-weight: 700;
    font-family: var(--font-lora) !important;

    cursor: pointer;
    text-transform: uppercase;
    color: ${({ show, theme }) => (show ? theme.color.status.white : theme.color.status.white)};
  }

  svg {
    transition: 0.3s all ease-in-out;
    transform: ${({ show }) => (show ? "rotate(-180deg)" : "rotate(0deg) ")};
  }
`;
