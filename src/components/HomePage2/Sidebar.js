import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlane, faSearch, faEnvelope, faFileAlt, faHeart, faUser, faLifeRing, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import logo from "../../assets/Skillnaav-logo.png"; // Replace with your actual logo path
import { useTabContext } from './HomePageContext/HomePageContext'; // Adjust path as needed

const Sidebar = () => {
  const { handleSelectTab } = useTabContext();

  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between p-6 font-poppins shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img src={logo} alt="Skillnaav Logo" className="w-250 h-96px mr-3" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleSelectTab('home')}
              className="flex items-center p-3 text-purple-700 bg-purple-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-3" />
              <span>Homepage</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('aeronautical-jobs')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faPlane} className="w-5 h-5 mr-3" />
              <span>Aeronautical jobs</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('search')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-3" />
              <span>Search</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('messages')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} className="w-5 h-5 mr-3" />
              <span>Messages</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('applications')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faFileAlt} className="w-5 h-5 mr-3" />
              <span>Applications</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('saved-jobs')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-3" />
              <span>Saved jobs</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('profile')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-3" />
              <span>Profile</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Support and Logout Section */}
      <div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleSelectTab('support')}
              className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faLifeRing} className="w-5 h-5 mr-3" />
              <span>Support</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectTab('logout')}
              className="flex items-center p-3 text-red-600 hover:bg-red-100 rounded-lg w-full text-left"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </li>
        </ul>

        {/* Upgrade Section */}
        <div className="mt-6 p-4 bg-purple-100 rounded-lg">
          <h3 className="text-purple-700 text-sm font-semibold">UPGRADE TO PREMIUM</h3>
          <p className="text-xs text-gray-600 mt-1">
            Your team has used 80% of your available space. Need more?
          </p>
          <button className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-lg">
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
