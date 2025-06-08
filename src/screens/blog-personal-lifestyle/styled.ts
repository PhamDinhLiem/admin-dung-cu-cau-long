import { styled } from "styled-components";

export const BlogLifeStyleScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogLifeStyleScreenContent = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 80px 0px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;
