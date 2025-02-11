import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Chatbot from './Components/Chatbots/Chatbot';
import DetailsPage from './Components/Details/DetailsPage';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Route */}
        <Route path="/Home" element={<><Home /><Main /></>} />
        {/* Details Page Route */}
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
      <Chatbot />
    </Router>
  );
};

export default App;
