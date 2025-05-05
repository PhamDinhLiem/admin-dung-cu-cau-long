import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 4%;
  padding-right: 4%;
  color: white;

  p {
    font-size: 15px;
  }

  .footer_content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 28px;
  }

  .footer_subcontent {
    display: flex;
    justify-content: space-between;
    padding-top: 64px;
    color: white;
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
`;
export const MangageContentWrapper = styled.div``;
