import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthUserHomePage from './pages/AuthUserHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => (
	<BrowserRouter>
    <Navbar/>
		<Routes>
			<Route path="/" element={<AuthUserHomePage />} />
			<Route path="/Login" element={<LoginPage />} />
			<Route path="/SignUp" element={<SignUpPage />} />
      
		</Routes>
	</BrowserRouter>
);

// function App() {
//   const test = ():void=>{
//     console.log("iml");
//   }
//   return (
//     <div className="App">
//       <Box heading='dam'  func1={test}/>
//     </div>
//   );
// }

export default App;