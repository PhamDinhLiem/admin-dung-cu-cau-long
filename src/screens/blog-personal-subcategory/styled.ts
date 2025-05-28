import { styled } from "styled-components";

export const BlogPersonalSubcategoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const BlogPersonalSubcategoryContent = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 80px 0px;
`;

export const BlogTopNewsSection = styled.section`
  gap: 15px;
  display: flex;
  padding-block: 15px;
  border-block: 2px solid #e5e7eb; /* Thay cho border-top và border-bottom */

  h3 {
    line-height: normal;
  }
`;

export const BlogPaginationNews = styled.section`
  display: flex;
  flex-direction: column;
`;
