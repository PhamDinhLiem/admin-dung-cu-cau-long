import styled from "styled-components";
import { device } from "@/styles/media";

export const MasterContentWrapper = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .bg-blue {
    background-color: #37abf4;
  }

  .text-blue {
    color: #37abf4;
  }

  .white {
    color: #fff;
  }

  .filter-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  input::placeholder {
    color: #999; /* Màu sắc cho placeholder */
    font-size: 14px; /* Kích thước chữ cho placeholder */
    font-weight: 500;
    opacity: 1; /* Độ mờ của placeholder (1 là không mờ) */
  }

  //Hình ảnh
  .HCM {
    background-image: url("https://metro.co.uk/wp-content/uploads/2018/02/509551992.jpg?quality=90&strip=all");
  }

  .TD {
    background-image: url("https://nasaland.vn/wp-content/uploads/2020/12/phoi-canh-khu-do-thi-van-phuc-thu-duc-tong-the.jpg");
  }

  .CT {
    background-image: url("https://tse3.mm.bing.net/th?id=OIP.LVm8bO6qGuiolC4E1PgMqAHaE8&pid=Api&P=0&h=180");
  }

  .HN {
    background-image: url("https://tse1.mm.bing.net/th?id=OIP.ON-VSTlyMoqA4zqrFJzFEQHaEK&pid=Api&P=0&h=180");
  }

  .area {
    background-size: cover; /* Make sure the background image covers the entire element */
    background-position: center; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the background image from repeating */
    transition: 0.5s ease-in-out;
  }

  .area:hover {
    transform: scale(1.02);
  }

  .linear {
    background-image: linear-gradient(to right, #37abf4 0%, #fbbf24 99.71%);
    opacity: 0.75;
    transition: 1s ease-in-out;
  }

  .content-board {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: 100px;
    width: 80%;
  }

  @media ${device.mobile} {
    padding-left: 16px;
    padding-right: 16px;

    .input-mb {
      width: 90%;
    }

    .filter-section {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }

    .content-board {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .white {
      font-size: 11px;
      font-weight: bold;
    }
  }
`;
