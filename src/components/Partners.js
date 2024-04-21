import { Container, Col, Row } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';
import { partners } from '../products/partners';

export const Partners = () => {
  return (
    <section className="partners" id="partners">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div>
              <h2>Наші партнери</h2>
              <p>Відкрити до співпраці</p>
              <Row>
                {partners.map((partner, index) => {
                  return <PartnerCard key={index} {...partner} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
