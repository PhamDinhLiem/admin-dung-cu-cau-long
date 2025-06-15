import { styled } from "styled-components";

export const PersonHeaderWrapper = styled.div`
  top: 0px;
  width: 100%;
  z-index: 999;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 206, 0);

  //Tablet size lớn
  @media (max-width: 1200px) {
    padding: 0px 2%;

    .nodisplay {
      display: none;
    }

    .bigger-animation2 {
      animation: emBroadenTablet 0.7s ease-in-out;
    }
  }

  //Tablet
  @media (max-width: 850px) {
    .nodisplay {
      display: none;
    }

    .bigger-animation2 {
      animation: emBroadenTablet2 0.7s ease-in-out;
    }
  }

  @media (max-width: 576px) {
    top: 60px;

    .header-content {
      display: none;
    }
  }

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

  //Animation cho desktop
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

  // Animation cho tablet
  @keyframes emBroadenTablet {
    0% {
      max-width: 1140px;
    }
    100% {
      max-width: 900px;
    }
  }

  @keyframes emBroadenTablet2 {
    0% {
      max-width: 1140px;
    }
    100% {
      max-width: 750px;
    }
  }
`;

export const PersonalMenuItem = styled.div<{ $isHavePathName?: boolean }>`
  flex-grow: 1;
  height: 52px;
  cursor: pointer;
  animation: fadeIN 0.7s ease-in-out;

  p {
    height: 100%;
    text-align: center;
    line-height: 52px;
  }

  :hover {
    background-color: rgb(204, 165, 0);
  }
`;

export const PersonalHeaderMobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 576px) {
    display: block;

    .appear {
      display: block;
    }

    .disappear {
      display: none;
    }

    .display-none {
      display: none;
      height: 0px;
    }

    @keyframes dropDown {
      0% {
        height: 0px;
      }
      100% {
        height: fit-content;
      }
    }

    @keyframes dropUp {
      0% {
        height: fit-content;
        display: none;
      }
      100% {
        height: 0px;
        display: none;
      }
    }
  }
`;
