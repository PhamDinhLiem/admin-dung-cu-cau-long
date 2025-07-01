import { styled } from "styled-components";

export const QuanLyTablerWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  border-radius: 10px;
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
