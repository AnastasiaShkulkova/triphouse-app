import styled from "styled-components";

export const StyledReviewCard = styled.div`
  /*  */
  margin-top: 100px;
  /*  */
  background-color: #eaf0f9;
  max-width: 400px;

  .reviewcard-info {
    padding: 33px 24px;
    display: flex;
    justify-content: space-between;
  }

  .info-hotelname {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #3077c6;
  }

  .info-hotellocation {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #3077c6;
  }

  .flex-mark {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .info-rating {
    max-width: 48px;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    padding: 4px 11px;
    background: #10367c;
    border-radius: 8px;
    color: #ffffff;
  }

  .info-reviews {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #bfbfbf;
  }

  .reviewcard-feedback {
    padding: 0 24px 66px;
  }

  .feedback-container {
    display: flex;
    gap: 20px;
    margin: 22px;
  }

  .user-name {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #383838;
  }

  .user-country {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #bfbfbf;
  }

  .feedback-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #383838;
  }
`;
