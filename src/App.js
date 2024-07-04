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
import { useRef } from 'react';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

function App() {
  const qrRef = useRef();

  const downloadQRCode = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qrcode.png';
          link.click();
        })
        .catch((err) => {
          console.error('Ошибка при создании QR-кода', err);
        });
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Products />
      <About />
      <Partners />
      <Contact />
      <div>
        <h1>QR-код для перехода на сайт</h1>

        <div ref={qrRef}>
          <QRCode value="https://beerking-khm.vercel.app/" />
        </div>
        <button onClick={downloadQRCode}>Завантажити QR-код</button>
      </div>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer containerId="main-toast" />
      <ToastContainer containerId="footer-toast" />
    </div>
  );
}

export default App;
