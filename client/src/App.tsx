import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthUserHomePage from './pages/AuthUserHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CoursePage from './pages/CoursePage'; // Import CoursePage component
import TopicPage  from './pages/TopicPage';
const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<AuthUserHomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Course/:courseId" element={<CoursePage />} /> 
      <Route path="/Course/:courseId/Topic/:TopicId" element={<TopicPage/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
