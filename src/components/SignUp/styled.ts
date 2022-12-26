import styled from "styled-components";

export const StyledSignUpComponent = styled.div`
  background-color: #eaf0f9;
  position: relative;
  display: flex;
  padding: 51px 24px;
  gap: 24px;

  .block-title {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #383838;
  }

  .block-button {
    padding: 12px 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #3077c6;
    border: 1px solid #3077c6;
    border-radius: 8px;
  }

  .signup-closebutton {
    position: absolute;
    right: 24px;
    top: 24px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
