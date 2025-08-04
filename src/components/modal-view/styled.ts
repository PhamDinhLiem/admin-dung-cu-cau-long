import { styled } from "styled-components";

export const ModalViewWrapper = styled.div`
  top: 5%;
  left: 10%;
  width: 100%;
  color: white;
  font-size: 24px;
  max-width: 700px;
  max-height: 500px;
  position: absolute;
  padding: 20px 20px;
  border-radius: 20px;
  overflow-y: scroll;
  background-color: black;

  input {
    padding: 10px 10px;
    border-radius: 10px;
    color: black;
    width: 100%;
  }

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
