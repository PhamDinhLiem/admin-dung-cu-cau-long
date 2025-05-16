import { styled } from "styled-components";

export const CustomPaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;

  button {
    width: 40px;
    height: 40px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #101010;
    color: #eee;
    border-color: #e2bdbd;
  }

  .active {
    font-weight: 900;
    border-color: #000000;
    background: rgb(255,206,0);
    color: #101010;
  }
`;
