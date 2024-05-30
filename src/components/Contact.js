// import { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import contactImg from '../assets/img/logo-beerking1.png';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Відправити');

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText('Відправлення...');
//     try {
//       let response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(formDetails),
//       });
//       setButtonText('Відправити');
//       // let result = await response.json();
//       setFormDetails(formInitialDetails);
//       if (response.ok) {
//         toast.success('Повідомлення успішно надіслано', {
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       } else {
//         toast.error('Щось пішло не так, спробуйте пізніше.', {
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       setButtonText('Відправити');
//       toast.error('Щось пішло не так, спробуйте пізніше.', {
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={
//                     isVisible ? 'animate__animated animate__zoomIn' : ''
//                   }
//                   src={contactImg}
//                   alt="Contact Us"
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                 className={
//                   isVisible ? 'animate__animated animate__fadeIn' : ''
//                 }
//                 >
//                   <h2>Будемо на зв'язку</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="Ім'я"
//                           onChange={(e) =>
//                             onFormUpdate('firstName', e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lastName}
//                           placeholder="Прізвище"
//                           onChange={(e) =>
//                             onFormUpdate('lastName', e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email"
//                           onChange={(e) =>
//                             onFormUpdate('email', e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Телефон"
//                           onChange={(e) =>
//                             onFormUpdate('phone', e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Повідомлення"
//                           onChange={(e) =>
//                             onFormUpdate('message', e.target.value)
//                           }
//                         ></textarea>
//                         <button className="contact-btn" type="submit">
//                           <span className="contact-btn-text">{buttonText}</span>
//                         </button>
//                       </Col>
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <ToastContainer />
//     </section>
//   );
// };

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactImg from '../assets/img/logo-beerking1.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Відправити');
  // const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText('Відправлення...');
    try {
      let response = await axios.post('/api/contact', formDetails);
      setButtonText('Відправити');
      // let result = response.data;
      setFormDetails(formInitialDetails);
      if (response.status === 200) {
        toast.success('Повідомлення успішно надіслано', {
          containerId: 'main-toast',
        });
      } else {
        toast.error('Щось пішло не так, спробуйте пізніше.', {
          containerId: 'main-toast',
        });
      }
    } catch (error) {
      setButtonText('Відправити');
      toast.error('Щось пішло не так, спробуйте пізніше.', {
        containerId: 'main-toast',
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Будемо на зв'язку</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Ім'я"
                          onChange={(e) =>
                            onFormUpdate('firstName', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Прізвище"
                          onChange={(e) =>
                            onFormUpdate('lastName', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) =>
                            onFormUpdate('email', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Телефон"
                          onChange={(e) =>
                            onFormUpdate('phone', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Повідомлення"
                          onChange={(e) =>
                            onFormUpdate('message', e.target.value)
                          }
                        ></textarea>
                        <button
                          className="contact-btn"
                          type="submit"
                          disabled={loading}
                        >
                          <span className="contact-btn-text">
                            {loading ? (
                              <Spinner as="span" animation="border" size="sm" />
                            ) : (
                              { buttonText }
                            )}
                          </span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
