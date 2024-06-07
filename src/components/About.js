// import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import about1 from '../assets/img/beerking1.jpg';
import about2 from '../assets/img/beerking2.jpg';
import about3 from '../assets/img/beerking3.jpg';
import about4 from '../assets/img/beerking4.jpg';

export const About = () => {
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
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2 className="about-title">Про нас</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme about-slider"
              >
                <div className="about-item">
                  <img
                    src={about1}
                    className="about-img"
                    alt="beerking store"
                  />
                </div>
                <div className="about-item">
                  <img
                    src={about2}
                    className="about-img"
                    alt="beerking store"
                  />
                </div>
                <div className="about-item">
                  <img
                    src={about3}
                    className="about-img"
                    alt="beerking store"
                  />
                </div>
                <div className="about-item">
                  <img
                    src={about4}
                    className="about-img"
                    alt="beerking store"
                  />
                </div>
              </Carousel>
              <p className="about-text">
                "Beer King" крамниця розливних освіжаючих напоїв в центрі
                чудового мальовничого місця біля озера, де затишок, чудовий
                захід сонця та свіже повітря. <br />
                Ми слідкуємо за якістю та прислухаємося до своїх кліентів. Наші
                постачальники з усїєї України, які відомі по всій країні. <br />
                Ассортимент може змінюватись, тому треба уточнювати актуальність
                за номером телефона або в наших соцмережах. Також є доставка по
                місту Хмельницький, від 600 грн доставка безкоштовна.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
