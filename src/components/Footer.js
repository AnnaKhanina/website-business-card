import React, { useState } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import crown from '../assets/img/icons/crown.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.status === 200) {
        toast.success('Ви успішно подписалися на наши новини!', {
          containerId: 'footer-toast',
        });
        setEmail('');
      }
    } catch (err) {
      toast.error('Помилка при відправці. Спробуйте знову.', {
        containerId: 'footer-toast',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrap">
          <img className="navbar-logo" src={crown} alt="logo" />
          <h3>BEERKING</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <div className="footer-social">
                <form id="subscribe-form" onSubmit={handleSubmit}>
                  <label htmlFor="email" className="label-text">
                    Підписуйтесь на новини
                  </label>
                  <div className="footer-form">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Введіть Ваш email"
                      required
                      className="footer-input"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="footer-btn"
                    >
                      <span className="navbar-btn-text">
                        {loading ? (
                          <Spinner as="span" animation="border" size="sm" />
                        ) : (
                          'Підписатися'
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </li>
            <li className="footer-item">
              <div className="footer-social">
                <p className="footer-text">Ми в соцмережах</p>
                <div className="footer-social-icon">
                  <a
                    href="https://web.telegram.org/k/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={telegram} alt="telegram" />
                  </a>

                  <a
                    href="https://www.viber.com/ua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={viber} alt="viber" />
                  </a>
                  <a
                    href="https://www.instagram.com/beer_king_market?igsh=MTJmZHRlMmd1Y2Ywag=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </li>
            <li className="footer-item">
              <div className="footer-section">
                <p className="footer-text">
                  <a href="/about" className="footer-link">
                    Про Нас
                  </a>
                </p>
                <p className="footer-text">
                  <a href="/privacy-policy" className="footer-link">
                    Політика Конфіденційності
                  </a>
                </p>
              </div>
            </li>
          </ul>
          <p className="footer-text-right">
            {' '}
            CopyRight 2024. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
