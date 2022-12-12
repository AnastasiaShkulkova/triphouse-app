import React from 'react';
import './App.css';
import OfferCard from './components/OfferCard/OfferCard';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <OfferCard/>
    </div>
  );
}

export default App;
