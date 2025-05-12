import { styled } from "styled-components";

export const BlogOverViewScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogOverViewScreenContent = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  max-width: 1080px;
  gap: 30px;
`;
