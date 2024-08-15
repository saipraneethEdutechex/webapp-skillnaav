import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext'; // Correct path
import Notifications from './Notifications';
import AeronauticalJobs from './AeronauticalJobs';
import SearchBar from './SearchBar';
import Home from './Home';
import Filter from './Filter'; // Import the Filter component
import SavedJobs from './SavedJobs';

const BodyContent = () => {
  const { selectedTab, fine, handleSelectTab } = useTabContext();
  console.log('Selected Tab:', selectedTab);

  let content;

  switch (selectedTab) {
    case 'home':
      content = <Home />;
      break;
    case 'aeronautical-jobs':
      content = <AeronauticalJobs />;
      break;
    case 'searchbar':
      content = <SearchBar />;
      break;
    case 'messages':
      content = <Notifications />; // Assuming Notifications is for messages
      break;
    case 'applications':
      content = <div>Applications Content</div>;
      break;
    case 'saved-jobs':
      content = <SavedJobs/>
      break;
    case 'profile':
      content = <div>Profile Content</div>;
      break;
    case 'support':
      content = <div>Support Content</div>;
      break;
    case 'logout':
      content = <div>Logout Content</div>;
      break;
    case 'filter':
      content = <Filter />; // Render the Filter component
      break;
    default:
      content = <div>Select a tab {fine}</div>;
  }

  return (
    <div className="flex-1 p-4">
      {content}
      <button onClick={() => handleSelectTab('searchbar')}></button>
    </div>
  );
};

export default BodyContent;
