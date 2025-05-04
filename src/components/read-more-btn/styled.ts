import styled from "styled-components";
import { device } from "@/styles/media";

export const ReadMoreButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: orange;
  }
`;
