// MainPage.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Homepage from './HomePage';
import Cards from './Cards';
import ApplyCards from './ApplyCards';

const MainPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseApplyCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-[251px] p-8 w-full">
          <Homepage />
          {selectedCard ? (
            <ApplyCards card={selectedCard} onClose={handleCloseApplyCard} />
          ) : (
            <Cards onCardClick={handleCardClick} />
          )}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
