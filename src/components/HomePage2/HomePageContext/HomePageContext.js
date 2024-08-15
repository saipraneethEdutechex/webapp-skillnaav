import React, { createContext, useState, useContext } from 'react';

const HomePageContext = createContext();

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  const saveJob = (job) => {
    setSavedJobs((prevJobs) => [...prevJobs, job]);
  };

  const removeJob = (job) => {
    setSavedJobs((prevJobs) => prevJobs.filter((j) => j !== job));
  };

  return (
    <HomePageContext.Provider value={{ selectedTab, handleSelectTab, savedJobs, saveJob, removeJob }}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useTabContext = () => useContext(HomePageContext);
