import { Col } from 'react-bootstrap';

export const PartnerCard = ({ imgUrl }) => {
  return (
    <Col sm={3} md={4} lg={2}>
      <div className="partner-imgbx">
        <img src={imgUrl} alt="partner card" className="partner-img" />
      </div>
    </Col>
  );
};
