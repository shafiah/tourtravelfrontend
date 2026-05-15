import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import DestinationPage from './pages/DestinationPage/DestinationPage';
import PackageDetails from './pages/PackageDetails/PackageDetails';
import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage';
import VisaPage from './pages/VisaPage/VisaPage';
import HotelsPage from './pages/HotelsPage/HotelsPage';
import AboutUs from './pages/AboutUsPage/AboutUs';
import ContactUs from './pages/ContactUsPage/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:destinationName" element={<DestinationPage />} />
          <Route path="/package/:packageId" element={<PackageDetails />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
