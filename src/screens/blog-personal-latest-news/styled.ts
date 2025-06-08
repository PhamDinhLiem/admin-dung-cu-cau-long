import { styled } from "styled-components";

export const BlogLatestNewsScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogLatestNewsScreenContent = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 80px 0px;
  min-height: 600px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const BlogLatestNewsScreenBlock = styled.div`
  gap: 15px;
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  border-bottom: 0.1px solid gray;
`;
