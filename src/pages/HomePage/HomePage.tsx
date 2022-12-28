import React from "react";
import { StyledOfferSection } from "./styled";
import { offersData } from "../../config";
import OfferCard from "../../components/OfferCard/OfferCard";

const HomePage = () => {
  return (
    <StyledOfferSection>
      <h2 className="section-title">What do we offer</h2>
      <ul className="offer-list">
        {offersData.map((item) => {
          return <OfferCard img={item.img} title={item.name} />;
        })}
      </ul>
    </StyledOfferSection>
  );
};

export default HomePage;
