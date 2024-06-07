import { Container, Row, Col } from 'react-bootstrap';
import { ModalWindow } from '../components/Modal';
import {
  ArrowRightCircle,
  TelephoneFill,
  Calendar2,
} from 'react-bootstrap-icons';
import bannerking from '../assets/img/king.png';
import bannerIcon1 from '../assets/img/icons/banner-icon1.svg';
import bannerIcon2 from '../assets/img/icons/banner-icon2.png';
import bannerIcon3 from '../assets/img/icons/banner-icon3.png';
import bannerIcon4 from '../assets/img/icons/banner-icon4.png';
import bannerIcon5 from '../assets/img/icons/banner-icon5.png';
import logobeerking from '../assets/img/logo-beerking1.png';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <img className="logo-img" src={logobeerking} alt="logo" />
                  <div>
                    <p className="banner-text">
                      {' '}
                      Крамниця розливного живого крафтового пива, сидра, вина та
                      лимонадів. Смаколики до напоїв, м'ясні, рибні, сирні,
                      снеки.
                    </p>
                    <ul>
                      <li>
                        <img
                          className="banner-icons"
                          src={bannerIcon1}
                          alt="icon a glass of beer"
                        />
                        <img
                          className="banner-icons"
                          src={bannerIcon3}
                          alt="icon fish"
                        />
                        <img
                          className="banner-icons"
                          src={bannerIcon2}
                          alt="icon cheese"
                        />
                        <img
                          className="banner-icons"
                          src={bannerIcon4}
                          alt="icon peanut"
                        />
                        <img
                          className="banner-icons"
                          src={bannerIcon5}
                          alt="icon popcorn"
                        />
                        <img
                          className="banner-icons"
                          src={bannerIcon1}
                          alt="icon a glass of beer"
                        />
                      </li>
                      <li>
                        <TelephoneFill
                          size={24}
                          style={{ paddingRight: '5px' }}
                        />
                        +380 730 744 434
                      </li>
                      <li>
                        {' '}
                        <Calendar2 size={24} style={{ paddingRight: '5px' }} />
                        11:00 - 22:00
                      </li>
                    </ul>
                  </div>
                  <span>
                    Наливаємо за адресою:
                    <ArrowRightCircle size={30} />
                    <a
                      href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu"
                      target="_blank"
                      rel="noreferrer"
                      className="adress"
                    >
                      м.Хмельницький, вул.Залізняка 8/3
                    </a>
                  </span>
                  <ModalWindow />
                </div>
              )}
            </TrackVisibility> */}
            <img className="logo-img" src={logobeerking} alt="logo" />
            <div>
              <p className="banner-text">
                {' '}
                Крамниця розливного живого крафтового пива, сидра, вина та
                лимонадів. Смаколики до напоїв, м'ясні, рибні, сирні, снеки.
              </p>
              <ul>
                <li>
                  <img
                    className="banner-icons"
                    src={bannerIcon1}
                    alt="icon a glass of beer"
                  />
                  <img
                    className="banner-icons"
                    src={bannerIcon3}
                    alt="icon fish"
                  />
                  <img
                    className="banner-icons"
                    src={bannerIcon2}
                    alt="icon cheese"
                  />
                  <img
                    className="banner-icons"
                    src={bannerIcon4}
                    alt="icon peanut"
                  />
                  <img
                    className="banner-icons"
                    src={bannerIcon5}
                    alt="icon popcorn"
                  />
                  <img
                    className="banner-icons"
                    src={bannerIcon1}
                    alt="icon a glass of beer"
                  />
                </li>
                <li>
                  <TelephoneFill size={24} style={{ paddingRight: '5px' }} />
                  +380 730 744 434
                </li>
                <li>
                  {' '}
                  <Calendar2 size={24} style={{ paddingRight: '5px' }} />
                  11:00 - 22:00
                </li>
              </ul>
            </div>
            <span>
              Наливаємо за адресою:
              <ArrowRightCircle size={30} />
              <a
                href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="adress"
              >
                м.Хмельницький, вул.Залізняка 8/3
              </a>
            </span>
            <ModalWindow />
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img
                    className="header-img"
                    // src={barrelbeer}
                    src={bannerking}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility> */}
            <img className="header-img" src={bannerking} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
