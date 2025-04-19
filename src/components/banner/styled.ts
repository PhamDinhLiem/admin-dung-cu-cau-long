import { device } from "@/styles/media";
import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
`;

export const TextWrapper = styled.div`
  position: absolute;
  width: 30%;
  z-index: 10;
  color: #ffffff;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: center;

  h2 {
    white-space: pre-line;
    padding-bottom: 24px;
    border-bottom: 1px solid #ffffff;
  }

  p {
    margin-top: 8px;
  }

  opacity: 1;

  @media ${device.mobile} {
    width: 60%;

    h2 {
      font-size: 16px;
      padding-bottom: 8px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const BackgroundGradient = styled.div`
  height: 100%;
  width: 100%;

  z-index: 5;
  position: relative;

  &:before {
    width: 100%;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-image: linear-gradient(to right, #37abf4 0%, #fbbf24 99.71%);
    opacity: 0.59;
  }
`;
