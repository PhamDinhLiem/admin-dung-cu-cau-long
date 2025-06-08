import { styled } from "styled-components";

export const BlogPersonalSubcategoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BlogPersonalSubcategoryContent = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 80px 0px;

  @media (max-width: 576px) {
    padding: 20px;

    .mb-w-full {
      width: 100%;
    }
  }
`;

export const BlogTopNewsSection = styled.section`
  gap: 15px;
  display: flex;
  padding-block: 15px;
  border-block: 2px solid #e5e7eb; /* Thay cho border-top và border-bottom */

  h3 {
    line-height: normal;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const BlogPaginationNews = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    h4 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;
