import styled from "styled-components";

export const BlogHomeScreenWrapper = styled.div`
  width: 100%;
  display: grid;
  max-width: 1080px;
  padding: 80px 30px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutBlockWrapper = styled.div``;
export const ContactBlockWrapper = styled.div``;
