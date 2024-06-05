import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { BeerCard } from './BeerCard.js';
import { CyderCard } from './CyderCard.js';
import { WineCard } from './WineCard.js';
import { beers } from '../products/beers.js';
import { cyders } from '../products/cyders.js';
import { wines } from '../products/wines.js';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Products = () => {
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
                          {beers.map((beer, index) => {
                            return <BeerCard key={index} {...beer} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {cyders.map((cyder, index) => {
                            return <CyderCard key={index} {...cyder} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {wines.map((wine, index) => {
                            return <WineCard key={index} {...wine} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
