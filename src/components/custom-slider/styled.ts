import styled from "styled-components";

export const BlogSliderWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #000000;
  padding-right: 10%;
  padding-left: 8.5%;
  width: 100%;
  height: 100%;

  @media (max-width: 576px) {
    padding-left: 0px;
    padding-right: 10px;

    h1 {
      font-size: 32px;
      text-align: center;
    }

    .subtitle {
      font-size: 24px;
    }
  }
`;

export const SliderContentVer1Wrapper = styled.div`
  display: flex;

  @media (max-width: 576px) {
    width: 100%;

    .mobile-implement {
      height: 300px !important;
      width: 100%;
      justify-content: center;
    }
  }
`;

export const SliderContentVer2Wrapper = styled.div`
  @media (max-width: 576px) {
    justify-content: center;
  }
`;
