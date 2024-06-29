import React, { useState, useEffect } from 'react';
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
  // ArrowRightCircle,
  TelephoneFill,
  Calendar2,
} from 'react-bootstrap-icons';
import car from '../assets/img/icons/car.svg';

Modal.setAppElement('#root');

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hideArrows, setHideArrows] = useState(false);

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

  const handleScroll = () => {
    setHideArrows(true);
    setTimeout(() => setHideArrows(false), 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div>
              <h2 className="about-title">Про нас</h2>
              <h3>Контакти</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={`owl-carousel owl-theme about-slider ${
                  hideArrows ? 'hide-arrows' : ''
                }`}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="about-item"
                    onClick={() => {
                      setSelectedImage(image);
                      setIsOpen(true);
                      setHideArrows(true);
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
              <div className="about-text-wrap">
                <p className="about-text">
                  "Beer King" - Крамниця розливного живого крафтового пива,
                  сидра, вина та лимонадів. Смаколики до напоїв, м'ясні, рибні,
                  сирні та різноманітні снеки. Магазин знаходиться в центрі
                  чудового мальовничого місця біля озера, де затишок, чудовий
                  захід сонця та свіже повітря.
                  <br />
                  Завітайте до нас і насолоджуйтеся унікальною атмосферою. У
                  нашому асортименті кожен знайде щось для себе: від насичених
                  темних сортів пива до легких та освіжаючих лимонадів. Крафтові
                  напої створені з любов’ю та майстерністю, щоб кожен ковток
                  дарував незабутні враження.
                  <br />
                  Наші смаколики ідеально доповнюють кожен напій, створюючи
                  гармонійний дует смаків. Ми пропонуємо широкий вибір закусок,
                  які задовольнять будь-який смак.
                  <br />
                  Ми слідкуємо за якістю та прислухаємося до своїх клієнтів.
                  Відчуйте справжній смак життя з "Beer King". Чекаємо на вас!
                </p>
              </div>
              <section className="about-contact">
                <div className="about-contact-bx">
                  <ul className="about-contact-list">
                    <li className="about-contact-list-item">
                      <p
                        // href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu"
                        className="about-contact-adress"
                      >
                        м.Хмельницький, вул.Залізняка 8/3
                      </p>
                    </li>
                    <li className="about-contact-list-item">
                      <Calendar2 size={24} style={{ paddingRight: '5px' }} />
                      11:00 - 22:00
                    </li>
                    <li className="about-contact-list-item">
                      <a href="tel:+380730744434" className="about-tel">
                        <TelephoneFill
                          size={24}
                          style={{ paddingRight: '5px' }}
                        />
                        +380 730 744 434
                      </a>
                    </li>
                    <li className="about-contact-list-item">
                      {' '}
                      <img src={car} alt="car icon" className="about-icon" />
                      Доставка по місту від 600 грн безкоштовна.
                    </li>
                  </ul>
                  {/* <div className="about-contact-calendar">
                    {' '}
                    <Calendar2 size={24} style={{ paddingRight: '5px' }} />
                    11:00 - 22:00
                  </div>
                  <div className="about-contact-phone">
                    <a href="tel:+380730744434" className="about-tel">
                      <TelephoneFill
                        size={24}
                        style={{ paddingRight: '5px' }}
                      />
                      +380 730 744 434
                    </a>
                  </div>
                  <div className="about-delivery">
                    <img src={car} alt="car icon" className="about-icon" />
                    Доставка по місту від 600 грн безкоштовна.
                  </div>
                  <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu">
                    м.Хмельницький, вул.Залізняка 8/3
                  </a> */}
                  {/* <div className="about-adress">
                  <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%97%D0%B0%D0%BB%D0%B8%D0%B7%D0%BD%D1%8F%D0%BA%D0%B0,+8,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+29000/@49.4488455,27.0062596,19z/data=!3m1!4b1!4m6!3m5!1s0x4732070b2fd796f3:0x727ba0dda3d340fd!8m2!3d49.4488446!4d27.0069033!16s%2Fg%2F11bw3_3txg?entry=ttu">
                    м.Хмельницький, вул.Залізняка 8/3
                  </a>
                </div> */}
                  <div className="about-adress">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8422125376726!2d27.006259615733326!3d49.4488455793486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732070b2fd796f3%3A0x727ba0dda3d340fd!2z0YPQuy4g0JrQsNGA0L7QstCwLCA4LCAzLCDQodCw0LLRgdC60LLQsCwgMjkwMDA!5e0!3m2!1sru!2sua!4v1687992236719!5m2!1sru!2sua"
                      width="400"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => {
                setIsOpen(false);
                setHideArrows(false);
              }}
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
                    onClick={() => {
                      setIsOpen(false);
                      setHideArrows(false);
                    }}
                    className="close-button"
                  >
                    <img
                      className="icon-close"
                      src={iconClose}
                      alt="icon close"
                    />
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
