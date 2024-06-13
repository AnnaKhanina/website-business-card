import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import navbarlogo from '../assets/img/logo-beer-king.png';
import telegram from '../assets/img/icons/telegram.svg';
import viber from '../assets/img/icons/viber.svg';
import instagram from '../assets/img/icons/instagram.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [expanded, setExpanded] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleScroll = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Router>
      <Navbar expand="lg" className="transition-navbar" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            <div className="nav-brand-bx">
              <img className="navbar-logo" src={navbarlogo} alt="Header Img" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
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
                href="#about"
                className={
                  activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                Про нас
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
                  href="https://t.me/beer_king_khm"
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
