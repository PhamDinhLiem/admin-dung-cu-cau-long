import { styled } from "styled-components";

export const BlogPersonalSubcategoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const BlogPersonalSubcategoryContent = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  max-width: 1080px;
`;

export const BlogTopNewsSection = styled.section`
  display: flex;
  border-top: 2px solid #e5e7eb;
  border-bottom: 2px solid #e5e7eb;
  padding: 15px 0px;
  gap: 15px;

  h3 {
    line-height: normal;
  }
`;

export const BlogPaginationNews = styled.section`
  display: flex;
  flex-direction: column;
`;
