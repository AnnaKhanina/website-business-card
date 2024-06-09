import { Row } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';
import { partners } from '../products/partners';

export const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partners-bx wow zoomIn">
              <h2>Наші партнери</h2>
              <h3>Відкрити до співпраці</h3>
              <Row>
                {partners.map((partner, index) => {
                  return <PartnerCard key={index} {...partner} />;
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
