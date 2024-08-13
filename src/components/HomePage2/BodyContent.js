import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext';
import Notifications from './Notifications';
import AeronauticalJobs from './AeronauticalJobs';
import Settings from './Settings';
import Home from './Home';

const BodyContent = () => {
  const { selectedTab, fine } = useTabContext();

  let content;

  switch (selectedTab) {
    case 'home':
      content = <Home />;
      break;
    case 'aeronautical-jobs':
      content = <AeronauticalJobs />;
      break;
    case 'settings':
      content = <Settings />;
      break;
    case 'messages':
      content = <Notifications />; // Assuming Notifications is for messages
      break;
    case 'applications':
      content = <div>Applications Content</div>;
      break;
    case 'saved-jobs':
      content = <div>Saved Jobs Content</div>;
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
    default:
      content = <div>Select a tab {fine}</div>;
  }

  return (
    <div className="flex-1 p-4">
      {content}
    </div>
  );
};

export default BodyContent;
