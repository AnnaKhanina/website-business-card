import { Col } from 'react-bootstrap';

export const PartnerCard = ({ imgUrl, title }) => {
  return (
    <Col sm={3} md={4} lg={2}>
      <div className="partner-imgbx">
        <img src={imgUrl} alt={title} className="partner-img" />
      </div>
    </Col>
  );
};
