import { styled } from "styled-components";

export const OtherNewsSectionWrapper = styled.div`
  gap: 20px;
  max-width: 1200px;
  display: flex;

  h1 {
    font-family: var(--blog-medium-font) !important;
    font-weight: 400 !important;
  }

  @media (max-width: 576px) {
    padding: 20px;
    flex-direction: column;

    .mb-w-full {
      width: 100%;
    }

    img {
      max-height: 150px;
      min-height: 150px;
    }

    .grid-2 {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
