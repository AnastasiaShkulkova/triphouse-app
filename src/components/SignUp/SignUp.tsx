import React, { useState } from "react";
import { StyledSignUpComponent } from "./styled";
import bannerUser from "../../assets/icons/banner-user.svg";
import crossIcon from "../../assets/icons/cross-icon.svg";

const SignUpComponent: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(true);

  return (
    <>
      {isRendered && (
        <StyledSignUpComponent>
          <img src={bannerUser} alt="" className="signup-banner" />
          <div className="signup-block block">
            <h4 className="block-title">
              Sign up and get 20% off your first booking
            </h4>
            <button className="block-button">Sign Up</button>
          </div>
          <button
            className="signup-closebutton"
            onClick={() => setIsRendered(false)}
          >
            <img src={crossIcon} alt="" className="closebutton-icon" />
          </button>
        </StyledSignUpComponent>
      )}
    </>
  );
};

export default SignUpComponent;
