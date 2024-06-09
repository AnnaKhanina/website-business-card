import { Col } from 'react-bootstrap';
import crown from '../assets/img/icons/crown.png';
import glass from '../assets/img/icons/glass.png';
import barley from '../assets/img/icons/barley.png';

export const CyderCard = ({
  title,
  cyderTitle,
  cyderStrength,
  cyderFactory,
  description,
  imgUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="beer-imgbx">
        <img src={imgUrl} alt="beer card" />
        <p className="beer-title">{cyderTitle}</p>
        <p className="beer-strength">
          <span className="strength">Міцність: </span>
          <span className="strength-beer">{cyderStrength}</span>
        </p>
        <p className="beer-factory">
          <span className="factory">Виробник: </span>
          <span className="factory-beer">{cyderFactory}</span>
        </p>
        <div className="beer-txtx">
          <h4>{title}</h4>
          <p className="beer-discr">{description}</p>
          <img className="products-icon" src={crown} alt="crown" />
          <img className="products-icon" src={glass} alt="glass of Beer" />
          <img className="products-icon" src={barley} alt="malt" />
        </div>
      </div>
    </Col>
  );
};
