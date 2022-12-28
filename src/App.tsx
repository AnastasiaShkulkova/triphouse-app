import React from "react";
import OfferCard from "./components/OfferCard/OfferCard";
import GlobalStyle, { AppContainer } from "./styles/GlobalStyles";
import UserAvatar from "./assets/icons/user-avatar.svg";
import hotelimage from "./assets/images/hotel-img.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import SignUpComponent from "./components/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import HotelReviewImage from "./assets/images/hotelreview-image.png";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar userAvatar={UserAvatar} menuItems={["stays", "attractions"]} />
      <AppContainer>
        <ReviewCard
          img={HotelReviewImage}
          hotelName="Ubud Bali Resort&SPA"
          hotelLocation="Bali, Indonesia"
          hotelRating="9,4"
          hotelReviews="1324 reviews"
          userName="Hanna Ivanova"
          userCountry="Ukraine"
          userFeedback="Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. "
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContainer>
    </div>
  );
}

export default App;
