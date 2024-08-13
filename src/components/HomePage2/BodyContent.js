import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext';
const BodyContent = () => {
  const { selectedTab,fine } = useTabContext();

  let content;

  switch (selectedTab) {
    case 'home':
      content = <div>Home Content {fine}</div>;
      break;
    case 'profile':
      content = <div>Profile Content</div>;
      break;
    case 'settings':
      content = <div>Settings Content</div>;
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
