
import React, { createContext, useState, useContext } from 'react';

const HomePageContext = createContext();

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('home');

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  const[fine,setFine]=useState(9)
  return (
    <HomePageContext.Provider value={{ selectedTab, handleSelectTab, fine }}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useTabContext = () => useContext(HomePageContext);
