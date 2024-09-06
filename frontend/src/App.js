import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { counterContext } from "./context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CreateAccount from "./components/SignUpLogin/CreateAccount";
import LoginPage from "./components/SignUpLogin/Login";
import NextScreen from "./components/SignUpLogin/NextScreen";
import VerificationCode from "./UnusedScreens/VerificationCode";
import Profilebuilding from "./components/ProfileBuilding/ProfileForm";
import ProfilePicture from "./components/ProfileBuilding/ProfilePicture";

import Cards from "./components/HomePage/Cards";
import JobPosting from "./components/HomePage/JobPosting";
import MainPage2 from "./components/HomePage2/MainPage2";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };
  const [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={count}>
        <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
          <Router>
            <Routes>
              <Route path="/loginpage" element={<MainPage2 />} />
              <Route path="/" element={<CreateAccount />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verification" element={<VerificationCode />} />
              <Route path="/next-screen" element={<NextScreen />} />
              <Route path="/profilebuilding" element={<Profilebuilding />} />
              <Route path="/profilepicture" element={<ProfilePicture />} />
              <Route path="/MainPage2" element={<MainPage2 />} />
              <Route
                path="/cards"
                element={<Cards onCardClick={handleCardClick} />}
              />
              <Route
                path="/job-posting"
                element={<JobPosting job={selectedJob} />}
              />
              <Route path="/login-acc" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          </Router>
        </GoogleOAuthProvider>
      </counterContext.Provider>
    </>
  );
};

export default App;
