import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import ReservationForm from './Components/ReservationForm';
import Navbar from './Components/Navbar'; // the new Navbar
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

export const backendUrl = 'http://localhost:4000';

const App = () => {
  return (
    <Router>
      <div style={{ marginTop: '70px' }}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
