import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext';

const Sidebar = () => {
  const { handleSelectTab } = useTabContext();

  return (
    <div className="bg-gray-200 w-64 min-h-screen p-4">
      <button onClick={() => handleSelectTab('home')} className="block w-full py-2 text-left hover:bg-gray-300">Home</button>
      <button onClick={() => handleSelectTab('profile')} className="block w-full py-2 text-left hover:bg-gray-300">Profile</button>
      <button onClick={() => handleSelectTab('settings')} className="block w-full py-2 text-left hover:bg-gray-300">Settings</button>
    </div>
  );
};

export default Sidebar;
