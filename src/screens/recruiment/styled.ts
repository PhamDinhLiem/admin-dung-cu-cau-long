import { device } from "@/styles/media";
import styled from "styled-components";

export const RecruitmentContentWrapper = styled.div`
  padding-left: 20%;
  padding-right: 20%;

  .headline {
    color: #37abf4;
  }
  .mb_change {
    margin-bottom: 20px;
  }
  @media ${device.mobile} {
    padding-left: 1%;
    padding-right: 1%;

    .mb_change {
      text-align: center;
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
`;

export const RecruitmentScreenWrapper = styled.div``;
