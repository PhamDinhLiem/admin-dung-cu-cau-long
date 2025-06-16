import { styled } from "styled-components";

export const BlogPersonalSubcategoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
  }
`;

export const BlogPersonalSubcategoryContent = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 80px 0px;

  @media (max-width: 1040px) {
    padding: 40px 10px;
  }

  @media (max-width: 840px) {
  }

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

  @media (max-width: 840px) {
    flex-direction: column;

    .tablet-implement {
      width: 100%;
      border: none;

      img {
        height: 100% !important;
        max-height: 300px;
      }
    }

    .remove-px {
      padding: 0px;
    }

    .tablet-h-full {
      height: 100%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const BlogPaginationNews = styled.section`
  display: flex;
  flex-direction: column;

  .pagination_news_img {
    width: 200px;
    object-fit: cover;
    height: 150px;
    aspect-ratio: 5 / 3;
  }

  @media (max-width: 576px) {
    h4 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;
