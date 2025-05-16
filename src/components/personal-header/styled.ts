import { styled } from "styled-components";

export const PersonHeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 206, 0);

  .appear-animation {
    animation: fadeIN 0.5s ease-in-out;
  }

  .bigger-animation {
    animation: emBroaden 0.7s ease-in-out;
  }

  .bigger-animation2 {
    animation: emBroaden2 0.7s ease-in-out;
  }

  .bg-focus {
    background-color: rgb(204, 165, 0);
  }

  h2 {
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }

  @keyframes fadeIN {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes emBroaden {
    0% {
      height: 52px;
    }
    100% {
      height: 64px;
    }
  }

  @keyframes emBroaden2 {
    0% {
      max-width: 1140px;
    }
    100% {
      max-width: 1040px;
    }
  }
`;

export const PersonalMenuItem = styled.div<{ $isHavePathName?: boolean }>`
  cursor: pointer;
  height: 52px;
  flex-grow: 1;

  p {
    height: 100%;
    text-align: center;
    line-height: 52px;
  }

  :hover {
    background-color: rgb(204, 165, 0);
  }
`;
