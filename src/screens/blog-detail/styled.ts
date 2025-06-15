import { styled } from "styled-components";

export const BlogDetailScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 80px;
  min-height: 500px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BlogDetailScreenContent = styled.div`
  width: 100%;
  max-width: 650px;
  padding-top: 80px;
  padding-bottom: 40px;

  h1,
  h2 {
    line-height: normal;
    font-family: var(--blog-intalic-font) !important;
  }

  h3,
  h4,
  ul,
  li {
    font-family: var(--blog-medium-font) !important;
  }

  p {
    font-family: var(--blog-medium-font) !important;
    font-size: 22px;
  }

  .alt {
    color: gray;
    font-size: 14px !important;
    width: 300px;
  }

  .grid-imgs {
    max-height: 450px !important;
  }

  @media (max-width: 576px) {
    padding: 20px;

    .mb-w-full {
      width: 100%;
    }
  }
`;
