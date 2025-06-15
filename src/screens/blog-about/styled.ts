import styled from "styled-components";

export const BlogAboutScreenWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 40px 20px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  .img-content {
    padding-top: 52px;
  }
`;

export const BlogAboutContentWrapper = styled.div``;
