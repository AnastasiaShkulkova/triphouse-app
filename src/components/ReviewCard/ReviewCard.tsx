import React from "react";
import { IReviewCardProps } from "../../interfaces/components/ReviewCard";
import { StyledReviewCard } from "./styled";
import userIcon from "../../assets/icons/userimage-icon.svg";

const ReviewCard: React.FC<IReviewCardProps> = ({
  img,
  hotelReviews,
  hotelRating,
  hotelName,
  hotelLocation,
  userName,
  userCountry,
  userFeedback,
}: IReviewCardProps) => {
  return (
    <StyledReviewCard>
      <img src={img} alt="#" className="reviewcard-image" />
      <div className="reviewcard-info info">
        <div className="info-container">
          <h6 className="info-hotelname">{hotelName}</h6>
          <h6 className="info-hotellocation">{hotelLocation}</h6>
        </div>
        <div className="info-container">
          <h6 className="info-rating">{hotelRating}</h6>
          <p className="info-reviews">{hotelReviews}</p>
        </div>
      </div>
      <div className="reviewcard-feedback feedback">
        <div className="feedback-container">
          <img src={userIcon} alt="#" className="feedback-icon" />
          <ul className="feedback-user user">
            <h6 className="iser-name">{userName}</h6>
            <h6 className="iser-country">{userCountry}</h6>
          </ul>
        </div>
        <p className="feedback-text">{userFeedback}</p>
      </div>
    </StyledReviewCard>
  );
};

export default ReviewCard;
