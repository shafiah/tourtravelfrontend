import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import DestinationPage from './pages/DestinationPage/DestinationPage';
import PackageDetails from './pages/PackageDetails/PackageDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:destinationName" element={<DestinationPage />} />
          <Route path="/package/:packageId" element={<PackageDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
