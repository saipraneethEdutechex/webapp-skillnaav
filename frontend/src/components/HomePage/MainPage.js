  import React from 'react';
  import Navbar from './Navbar';
  import Sidebar from './Sidebar';
  import BodyContent from './BodyContent';
  import { TabProvider } from './HomePageContext/HomePageContext'; // Correct path

  const MainPage = () => {
    return (
      <TabProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <BodyContent />
          </div>
        </div>
      </TabProvider>
    );
  };

  export default MainPage;
