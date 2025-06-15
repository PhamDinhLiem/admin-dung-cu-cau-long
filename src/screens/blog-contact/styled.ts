import styled from "styled-components";

export const BlogContactScreenWrapper = styled.div`
  gap: 40px;
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 40px 20px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 800px) {
    .flexing-col {
      flex-direction: column;
    }
  }

  .img-content {
    padding-top: 52px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
