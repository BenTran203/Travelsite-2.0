import React, { useEffect } from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Chatbot from './Components/Chatbots/Chatbot';
<<<<<<< HEAD
<<<<<<< HEAD
import DetailsPage from './Components/Details/DetailsPage'
=======
// import DetailsPage from './Components/Details/DetailsPage'
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
=======
// import DetailsPage from './Components/Details/DetailsPage'
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<> <Home /> <Main />   </>} />
        {/* Other Route */}
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
      <Chatbot />
    </BrowserRouter>
=======
=======
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
    <Router>
      <Navbar />
      <Routes>
        {/* Main Route */}
        <Route path="/" element={
          <>
            <Home />
            <Main />
            <Footer />
            <Chatbot />
          </>
        } />
        {/* Route */}
        {/* <Route path="/details/:id" element={<DetailsPage />} /> */}
      </Routes>
    </Router>
<<<<<<< HEAD
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
=======
>>>>>>> 7981edfc339698238ff281551f2604429dc14ce9
  );
}

export default App