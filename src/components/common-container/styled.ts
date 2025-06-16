import { styled } from "styled-components";

export const CommonContainerWrapper = styled.div`
  min-height: 400px;

  .common-block:hover .icon-section {
    color: white;
    background-color: rgb(234 88 12);
  }

  @media (max-width: 1100px) {
    padding: 0px 4%;
  }
`;
