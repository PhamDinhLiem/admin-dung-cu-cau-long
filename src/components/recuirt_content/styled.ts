import styled from "styled-components";
import { device } from "@/styles/media";

export const RecruitmentContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
