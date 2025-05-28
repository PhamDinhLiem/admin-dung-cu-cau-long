import { styled } from "styled-components";

export const PersonHeaderWrapper = styled.div`
  top: 0px;
  width: 100%;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: center;
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
  flex-grow: 1;
  height: 52px;
  cursor: pointer;

  p {
    height: 100%;
    text-align: center;
    line-height: 52px;
  }

  :hover {
    background-color: rgb(204, 165, 0);
  }
`;
