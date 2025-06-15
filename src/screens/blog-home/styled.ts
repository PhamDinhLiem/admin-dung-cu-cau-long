import styled from "styled-components";

export const BlogHomeScreenWrapper = styled.div`
  width: 100%;
  display: grid;
  max-width: 1080px;
  padding: 80px 30px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1000px) {
    padding: 40px 20px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutBlockWrapper = styled.div``;
export const ContactBlockWrapper = styled.div``;
