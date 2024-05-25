import { Container } from 'react-bootstrap';
import crown from '../assets/img/icons/crown.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrap">
          <img className="navbar-logo" src={crown} alt="logo" />
          <h3>BEERKING</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <div className="footer-social">
                <form id="subscribe-form" action="/api/subscribe" method="post">
                  <label htmlFor="email">Підписуйтесь на новини:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введіть Ваш email"
                    required
                  />
                  <button type="submit">Підписатися</button>
                </form>
              </div>
            </li>
            <li className="footer-item">
              <div className="footer-social">
                <p className="footer-text">Замовити онлайн</p>
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
