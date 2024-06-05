import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Partners } from './components/Partners.js';
import { Products } from './components/Products.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { About } from './pages/About.js';
import { PrivacyPolicy } from './pages/PrivacyPolicy.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ScrollToTopButton.js';
import ScrollToBottomButton from './components/ScrollToBottomButton.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <Banner />
    //   <Products />
    //   <Partners />
    //   <Contact />
    //   <Footer />
    //   <ScrollToTopButton />
    //   <ScrollToBottomButton />
    //   <ToastContainer containerId="main-toast" />
    //   <ToastContainer containerId="footer-toast" />
    // </div>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Products />
                <Partners />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <ScrollToBottomButton />
        <ToastContainer containerId="main-toast" />
        <ToastContainer containerId="footer-toast" />
      </div>
    </Router>
  );
}

export default App;
