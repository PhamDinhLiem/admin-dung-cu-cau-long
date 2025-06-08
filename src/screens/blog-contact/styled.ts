import styled from "styled-components";

export const BlogContactScreenWrapper = styled.div`
  gap: 40px;
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;

  .img-content {
    padding-top: 52px;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
