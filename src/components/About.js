import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import about1 from '../assets/img/beerking1.jpg';
import about2 from '../assets/img/beerking2.jpg';
import about3 from '../assets/img/beerking3.jpg';
import about4 from '../assets/img/beerking4.jpg';
import iconClose from '../assets/img/icons/modal-close.svg';
import {
  ArrowRightCircle,
  TelephoneFill,
  Calendar2,
} from 'react-bootstrap-icons';
import bannerIcon1 from '../assets/img/icons/banner-icon1.svg';
import bannerIcon2 from '../assets/img/icons/banner-icon2.png';
import bannerIcon3 from '../assets/img/icons/banner-icon3.png';
import bannerIcon4 from '../assets/img/icons/banner-icon4.png';
import bannerIcon5 from '../assets/img/icons/banner-icon5.png';

Modal.setAppElement('#root');

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [about1, about2, about3, about4];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // <section className="about" id="about">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="about-bx wow zoomIn">
    //           <h2 className="about-title">Про нас</h2>
    //           <Carousel
    //             responsive={responsive}
    //             infinite={true}
    //             className="owl-carousel owl-theme about-slider"
    //           >
    //             {images.map((image, index) => (
    //               <div
    //                 key={index}
    //                 className="about-item"
    //                 onClick={() => {
    //                   setSelectedImage(image);
    //                   setIsOpen(true);
    //                 }}
    //               >
    //                 <img
    //                   src={image}
    //                   className="about-img"
    //                   alt="beerking store"
    //                 />
    //               </div>
    //             ))}
    //           </Carousel>
    //           <p className="about-text">
    //             "Beer King" крамниця розливних освіжаючих напоїв в центрі
    //             чудового мальовничого місця біля озера, де затишок, чудовий
    //             захід сонця та свіже повітря. <br />
    //             Ми слідкуємо за якістю та прислухаємося до своїх кліентів. Наші
    //             постачальники з усїєї України, які відомі по всій країні. <br />
    //             Ассортимент може змінюватись, тому треба уточнювати актуальність
    //             за номером телефона або в наших соцмережах. Також є доставка по
    //             місту Хмельницький, від 600 грн доставка безкоштовна.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Modal
    //     isOpen={isOpen}
    //     onRequestClose={() => setIsOpen(false)}
    //     contentLabel="Image Modal"
    //     className="about-modal"
    //     overlayClassName="overlay"
    //   >
    //     {selectedImage && (
    //       <div>
    //         <img
    //           src={selectedImage}
    //           alt="Enlarged beerking store"
    //           className="modal-image"
    //         />
    //         <button onClick={() => setIsOpen(false)} className="close-button">
    //           <img className="icon-close" src={iconClose} alt="logo" />
    //         </button>
    //       </div>
    //     )}
    //   </Modal>
    // </section>

    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div>
              <h2 className="about-title">Про нас</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme about-slider"
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="about-item"
                    onClick={() => {
                      setSelectedImage(image);
                      setIsOpen(true);
                    }}
                  >
                    <img
                      src={image}
                      className="about-img"
                      alt="beerking store"
                    />
                  </div>
                ))}
              </Carousel>
              <p className="about-text">
                "Beer King" - Крамниця розливного живого крафтового пива, сидра,
                вина та лимонадів. Смаколики до напоїв, м'ясні, рибні, сирні та
                різноманітні снеки. Магазин знаходиться в центрі чудового
                мальовничого місця біля озера, де затишок, чудовий захід сонця
                та свіже повітря. <br />
                Ми слідкуємо за якістю та прислухаємося до своїх кліентів. Наші
                постачальники відомі по всій країні. <br />
                Також є доставка по місту Хмельницький, від 600 грн доставка
                безкоштовна.
              </p>
              <div>
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
            </div>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              contentLabel="Image Modal"
              className="about-modal"
              overlayClassName="overlay"
            >
              {selectedImage && (
                <div>
                  <img
                    src={selectedImage}
                    alt="Enlarged beerking store"
                    className="modal-image"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="close-button"
                  >
                    <img className="icon-close" src={iconClose} alt="logo" />
                  </button>
                </div>
              )}
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
