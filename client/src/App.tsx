// App.tsx

import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { CreateProfile } from './components/CreateProfile';
import Navbar from './components/Navbar';
import AuthUserHomePage from './pages/AuthUserHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CoursePage from './pages/CoursePage';
import TopicPage from './pages/TopicPage';
import  AboutUsPage  from './pages/AboutUsPage';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage';
const App: React.FC = () => (
  <UserProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<AuthUserHomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path='/CreateProfile' element={<CreateProfile/>}/>
        <Route path="/Course/:courseIdNumber" element={<CoursePage />} />
        <Route path="/Course/:courseId/Topic/:subTopicId" element={<TopicPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Profile/:userIdNumber" element={<ProfilePage />} />
        <Route path = "/Test" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  </UserProvider>

);

export default App;
