import { styled } from "styled-components";

export const QuanLyTablerWrapper = styled.div`
  overflow: hidden;
  overflow-x: auto;
  padding-top: 20px;
  position: relative;
  white-space: nowrap;
  padding-bottom: 20px;
  border-radius: 10px;
  min-height: 550px;
  background-color: white;
`;

export const TrItemWrapper = styled.tr``;

export const ThItemWrapper = styled.th<{ $size?: string; $align?: string; $fw?: number }>`
  padding: ${
      ({ $size }) => ($size === "sm" ? "2px" : $size === "md" ? "5px" : $size === "lg" ? "7px" : "0px") // default
    }
    20px;
  min-width: ${
    ({ $size }) => ($size === "sm" ? "120px" : $size === "md" ? "170px" : $size === "lg" ? "220px" : "120px") // default
  };
  text-align: ${
    ({ $align }) => ($align ? $align : "left") // default
  };
  font-weight: ${
    ({ $fw }) => ($fw ? $fw : 600) // default
  };
`;
