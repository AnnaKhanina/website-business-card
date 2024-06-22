// import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
// import { BeerCard } from './BeerCard';
// import { CyderCard } from './CyderCard';
// import { WineCard } from './WineCard';
// import { beers } from '../products/beers';
// import { cyders } from '../products/cyders';
// import { wines } from '../products/wines';
// import { ModalWindow } from '../components/Modal';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Products = () => {
//   return (
//     <section className="products" id="products">
//       <Container>
//         <Row>
//           <Col size={12} className="products-col">
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? 'animate__animated animate__fadeIn' : ''
//                   }
//                 >
//                   <h2>Продукція</h2>
//                   <h3>Наш асортимент</h3>
//                   <Tab.Container id="products-tabs" defaultActiveKey="first">
//                     <Nav
//                       variant="pills"
//                       className="nav-pills mb-5 justify-content-center align-items-center"
//                       id="pills-tab"
//                     >
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Пиво</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Сидр</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Вино</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content
//                       id="slideInUp"
//                       className={
//                         isVisible ? 'animate__animated animate__slideInUp' : ''
//                       }
//                     >
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {beers.map((beer, index) => {
//                             return <BeerCard key={index} {...beer} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="second">
//                         <Row>
//                           {cyders.map((cyder, index) => {
//                             return <CyderCard key={index} {...cyder} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                         <Row>
//                           {wines.map((wine, index) => {
//                             return <WineCard key={index} {...wine} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               )}
//             </TrackVisibility>
//             <p className="products-text">
//               *Ассортимент може змінюватись. Актуальність цін та наявність
//               товару можна дізнатися{' '}
//               <a href="tel:+380730744434" className="products-tel">
//                 за номером телефона
//               </a>{' '}
//               або в наших соцмережах.
//             </p>
//             <ModalWindow />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BeerCard } from './BeerCard';
import { CyderCard } from './CyderCard';
import { WineCard } from './WineCard';
import { beers } from '../products/beers';
import { cyders } from '../products/cyders';
import { wines } from '../products/wines';
import { ModalWindow } from '../components/Modal';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Products = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === index ? null : index
    );
  };

  return (
    <section className="products" id="products">
      <Container>
        <Row>
          <Col size={12} className="products-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Продукція</h2>
                  <h3>Наш асортимент</h3>
                  <Tab.Container id="products-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Пиво</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Сидр</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Вино</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {beers.map((beer, index) => (
                            <BeerCard
                              key={index}
                              {...beer}
                              isActive={activeCard === index}
                              onClick={() => handleCardClick(index)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {cyders.map((cyder, index) => (
                            <CyderCard
                              key={index}
                              {...cyder}
                              isActive={activeCard === index}
                              onClick={() => handleCardClick(index)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {wines.map((wine, index) => (
                            <WineCard
                              key={index}
                              {...wine}
                              isActive={activeCard === index}
                              onClick={() => handleCardClick(index)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
            <p className="products-text">
              *Ассортимент може змінюватись. Актуальність цін та наявність
              товару можна дізнатися{' '}
              <a href="tel:+380730744434" className="products-tel">
                за номером телефона
              </a>{' '}
              або в наших соцмережах.
            </p>
            <ModalWindow />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
