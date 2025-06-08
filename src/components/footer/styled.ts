import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  color: white;
  line-height: 24px;

  p {
    font-size: 15px;
  }

  .footer_content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 28px;
    width: 100%;
    max-width: 1080px;
  }

  .footer_subcontent {
    display: flex;
    justify-content: space-between;
    padding-top: 64px;
    color: white;
  }

  @media (max-width: 576px) {
    .footer_content {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const InvestorContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-weight: 700;
  }
`;
export const EmailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .ipn-email {
    background-color: black;
    padding: 12px 20px;
    border: 2px solid white;
    border-radius: 2px;
    font-weight: 300;
    width: 90%;
  }

  .ipn_checkbox {
    padding: 2px;
    background-color: black;
    border-radius: 2px;
    min-height: 20px;
    min-width: 20px;
  }

  .checkout_section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
  }

  @media (max-width: 576px) {
    .checkout_section {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const MangageContentWrapper = styled.div`
  @media (max-width: 576px) {
    padding-left: 0px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 70px;
      line-height: 70px;
    }
  }
`;
