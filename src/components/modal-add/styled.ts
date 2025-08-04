import { styled } from "styled-components";

export const ModalAppWrapper = styled.div`
  top: 10%;
  left: 25%;
  color: white;
  position: absolute;
  padding: 20px 20px;
  border-radius: 12px;
  background-color: black;
  box-shadow: 2px 2px 2px black;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
  z-index: 100;

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 4px; /* thanh dọc nhỏ lại */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* nền track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555; /* màu thumb */
    border-radius: 10px; /* bo tròn */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #777;
  }

  /* Firefox support */
  scrollbar-width: thin;
  scrollbar-color: #555 transparent;
`;
