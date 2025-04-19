import { device } from "@/styles/media";
import styled from "styled-components";

export const IntroduceScreenWrapper = styled.div``;

export const AuthorWrapper = styled.div`
  border-radius: 40px;
  margin-top: 264px;

  margin-bottom: 50px;
  background: #f1dbc4;
  width: 60%;
  padding: 40px;

  img {
    width: 346px;
    height: 346px;
    margin: 0 auto;
    margin-top: -220px;

    text-align: center;
    margin-bottom: 60px;
  }
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    margin-top: 180px;
    padding: 24px;
    border-radius: 24px;
    width: 100%;
    img {
      margin-top: -150px;
      width: 220px;
      height: 220px;
    }
  }
`;
