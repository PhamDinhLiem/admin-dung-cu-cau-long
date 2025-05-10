import { styled } from "styled-components";

export const PersonHeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 206, 0);
`;

export const PersonalMenuItem = styled.div<{ $active: boolean; $isHavePathName?: boolean }>`
  cursor: pointer;
  height: 52px;
  flex-grow: 1;

  p {
    height: 100%;
    text-align: center;
    line-height: 52px;
  }

  :hover {
    background-color: rgb(204, 165, 0);
  }
`;
