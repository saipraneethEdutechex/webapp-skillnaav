import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/CreateAccountWithValidation';
import NextScreen from './components/NextScreen';
import VerificationCode from './components/VerificationCode';
import Profilebuilding from './components/Profile-Building/ProfileForm';
import ProfilePicture from './components/Profile-Building/ProfilePicture';
import MainPage from './components/Home-Page/MainPage';
import Cards from './components/Home-Page/Cards';
import JobPosting from './components/Home-Page/ApplyCards';

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="/next-screen" element={<NextScreen />} />
          <Route path="/profilebuilding" element={<Profilebuilding />} />
          <Route path="/profilepicture" element={<ProfilePicture />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/cards" element={<Cards onCardClick={handleCardClick} />} />
          <Route path="/job-posting" element={<JobPosting job={selectedJob} />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
