import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './sign/SignUp';
import Login from './login/Login';
import Home from './Home/Home';
import Booking from './booking/Booking'; // Import the Booking component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/booking/:trainId" element={<Booking />} /> {/* New booking route */}
      </Routes>
    </Router>
  );
}

export default App;
