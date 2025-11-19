import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Booking } from '../pages/Booking';
import { ThankYou } from '../pages/ThankYou';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}