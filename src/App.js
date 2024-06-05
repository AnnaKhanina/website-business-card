import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Partners } from './components/Partners';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToBottomButton from './components/ScrollToBottomButton';
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
