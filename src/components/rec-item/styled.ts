import styled from "styled-components";
import { device } from "@/styles/media";

export const RecruitItemWrapper = styled.div`
  cursor: pointer;

  .mainImg {
    width: 200px;
    height: 150px;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    .mainImg {
      transform: scale(1.02);
    }

    .title {
      color: #37abf4; /* Hoặc màu mà bạn muốn */
    }
  }
  @media ${device.mobile} {
    .title {
      font-size: 14px;
    }
    .description {
      font-size: 11px;
    }
  }
`;
