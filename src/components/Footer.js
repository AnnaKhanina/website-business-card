import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo1 from '../assets/img/logo1.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="footer-logo-text">
            BEERKING
            <img className="navbar-logo" src={logo1} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://uk-ua.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p> CopyRight 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
