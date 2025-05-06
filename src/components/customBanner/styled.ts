import { device } from "@/styles/media";
import styled from "styled-components";

export const BlogBannerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0px;
  height: 400px;

  .absolute-black {
    background-color: black;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
`;
