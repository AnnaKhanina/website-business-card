import { Col } from 'react-bootstrap';
import crown from '../assets/img/icons/crown.png';
import glass from '../assets/img/icons/glass.png';
import barley from '../assets/img/icons/barley.png';

export const WineCard = ({
  title,
  wineTitle,
  wineStrength,
  wineSugar,
  wineFactory,
  description,
  imgUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="beer-imgbx">
        <img src={imgUrl} alt={title} />
        <p className="beer-title">{wineTitle}</p>
        <p className="beer-strength">
          <span className="strength">Міцність: </span>
          <span className="strength-beer">{wineStrength}. </span>
          <span className="density">Цукор: </span>
          <span className="sugar">{wineSugar}</span>
        </p>
        <p className="beer-factory">
          <span className="factory">Виробник: </span>
          <span className="factory-beer">{wineFactory}</span>
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
