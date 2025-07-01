import { styled } from "styled-components";

export const DashBoardWrapper = styled.div`
  padding: 10px 0px;
`;

export const CardsContent = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ChartContent = styled.div`
  display: flex;
  padding: 30px;
  border-radius: 10px;
  background-color: black;
  justify-content: space-between;
`;
