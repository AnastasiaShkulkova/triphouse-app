import React from "react";
import OfferCard from "./components/OfferCard/OfferCard";
import GlobalStyle, { AppContainer } from "./styles/GlobalStyles";
import Supporticon from "./assets/icons/support-icon.svg";
import UserAvatar from "./assets/icons/user-avatar.svg";
import hotelimage from "./assets/images/hotel-img.png";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import SignUpComponent from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar userAvatar={UserAvatar} menuItems={["stays", "attractions"]} />
      <AppContainer>
        <Card img={hotelimage} title="example" text="example location" />
        <SignUpComponent />
      </AppContainer>
    </div>
  );
}

export default App;
