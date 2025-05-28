import { device } from "@/styles/media";
import styled from "styled-components";

export const BlogBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  margin-top: 0px;
  position: relative;

  .absolute-black {
    background-color: black;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
`;
