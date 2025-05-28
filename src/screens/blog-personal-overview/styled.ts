import { styled } from "styled-components";

export const BlogOverViewScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogOverViewScreenContent = styled.div`
  gap: 30px;
  width: 100%;
  display: grid;
  max-width: 1080px;
  padding: 80px 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;
