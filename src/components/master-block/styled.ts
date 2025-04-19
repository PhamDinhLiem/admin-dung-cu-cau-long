import styled from "styled-components";
import { device } from "@/styles/media";

export const MasterBlockItemWrapper = styled.div`
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 10px; /* Added padding for spacing */

  .mainImg {
    border-radius: 999px;
    width: 70px;
    height: 70px;
    object-fit: cover; /* Ensure the image maintains its aspect ratio */
    margin-right: 10px; /* Add spacing between image and text */
  }

  .title {
    color: #37abf4; /* Color for title */
    font-size: 16px; /* Default font size */
    font-weight: bold; /* Make title bold */
  }

  .description {
    color: #eebb12; /* Color for description text */
    margin: 5px 0; /* Add vertical spacing */
    overflow-wrap: break-word; /* Ensure long words break and wrap */
    word-break: break-word; /* Handle overflow of long words */
    white-space: normal; /* Allow text to wrap normally */
  }

  .link {
    border-radius: 5px;
    color: #fff;
    background-color: #37abf4;
    display: inline-block;
    width: fit-content;
    padding: 5px 10px;
    transition: 0.5s ease-in-out;
  }

  .link:hover {
    cursor: pointer;
    color: #37abf4;
    border: 1px solid #37abf4;
    background-color: #fff;
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media ${device.mobile} {
    .mainImg {
      width: 80px;
      height: 80px;
    }
  }
`;
