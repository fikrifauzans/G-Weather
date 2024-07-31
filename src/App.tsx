import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherGrid from './pages/Weather';
import './index.css';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<WeatherGrid />} />
    </Routes>
  </Router>
);

export default App;
