// import { Row } from 'react-bootstrap';
// import { PartnerCard } from './PartnerCard';
// import { partners } from '../products/partners';

// export const Partners = () => {
//   return (
//     <section className="partners" id="partners">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="partners-bx wow zoomIn">
//               <h2>Наші партнери</h2>
//               <h3>Відкрити до співпраці</h3>
//               <Row>
//                 {partners.map((partner, index) => {
//                   return <PartnerCard key={index} {...partner} />;
//                 })}
//               </Row>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Row, Button } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';
import { partners } from '../products/partners';

export const Partners = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partners-bx wow zoomIn">
              <h2>Наші партнери</h2>
              <h3>Відкрити до співпраці</h3>
              <Row>
                {partners
                  .slice(0, isMobile && !isExpanded ? 2 : partners.length)
                  .map((partner, index) => {
                    return <PartnerCard key={index} {...partner} />;
                  })}
              </Row>
              {isMobile && (
                <Button
                  onClick={toggleExpand}
                  className="partners-toggle-button"
                >
                  {isExpanded ? 'Згорнути' : 'Показати всіх'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
