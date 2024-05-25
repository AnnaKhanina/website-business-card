import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import crown from '../assets/img/icons/crown.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className="transition-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img className="navbar-logo" src={crown} alt="logo" />
            <h3>BEERKING</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Головна
              </Nav.Link>
              <Nav.Link
                href="#products"
                className={
                  activeLink === 'beers' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('beers')}
              >
                Продукція
              </Nav.Link>
              <Nav.Link
                href="#partners"
                className={
                  activeLink === 'partners'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('partners')}
              >
                Наші партнери
              </Nav.Link>
            </Nav>

            <div className="navbar-media d-flex align-items-center">
              <div className="social-icon d-flex align-items-center">
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
              <HashLink to="#connect">
                <button className="navbar-btn">
                  <span className="navbar-btn-text">З'вязок</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
