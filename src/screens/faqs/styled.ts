import { device } from "@/styles/media";
import styled from "styled-components";

export const FaqsScreenWrapper = styled.div``;

export const FaqsContentWrapper = styled.div`
  border-radius: 40px;
  padding: 50px;

  margin-bottom: 50px;
  background: #f1dbc4;

  @media ${device.mobile} {
    border-radius: 24px;
    padding: 24px;

    h4,
    h3,
    h2,
    h1 {
      font-size: 14px;
      font-weight: 700;
      width: 95%;
    }
  }
`;
