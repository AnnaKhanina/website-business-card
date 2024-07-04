import './App.css';
import { NavBar } from './components/NavBar';
import { Partners } from './components/Partners';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products />
      <About />
      <Partners />
      <Contact />
      <div>
        <h1>QR-код для перехода на сайт</h1>
        <QRCode value="https://beerking-khm.vercel.app/" />
      </div>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer containerId="main-toast" />
      <ToastContainer containerId="footer-toast" />
    </div>
  );
}

export default App;
