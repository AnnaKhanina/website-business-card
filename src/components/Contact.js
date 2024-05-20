// import React, { useState } from 'react';
// import axios from 'axios';

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     lastName: '',
//     firstName: '',
//     email: '',
//     phone: '',
//     comment: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   //   const postUrl = `${process.env.REACT_MAILCHIMP_API_URL}`;
//   // url = { postUrl };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://us22.admin.mailchimp.com/lists/members/?id=dfaa58f951',
//         {
//           email_address: formData.email,
//           status: 'pending', // You may customize this status as per your requirement
//           merge_fields: {
//             FNAME: formData.firstName,
//             LNAME: formData.lastName,
//             PHONE: formData.phone,
//             COMMENT: formData.comment,
//           },
//         }
//       );
//       console.log(response.data);
//       // Handle success
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="lastName"
//         placeholder="Last Name"
//         value={formData.lastName}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="firstName"
//         placeholder="First Name"
//         value={formData.firstName}
//         onChange={handleInputChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleInputChange}
//       />
//       <textarea
//         name="comment"
//         placeholder="Comment"
//         value={formData.comment}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// import { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import contactImg from '../assets/img/logo-beerking1.png';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [status, setStatus] = useState({
//     message: '',
//     success: null,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(process.env.REACT_MAILCHIMP_API_URL, {
//         method: 'POST',
//         body: JSON.stringify({
//           email_address: formData.email,
//           status: 'subscribed',
//           merge_fields: {
//             FNAME: formData.firstName,
//             LNAME: formData.lastName,
//             PHONE: formData.phone,
//             MESSAGE: formData.message,
//           },
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({
//           message: 'Success! Your message has been sent.',
//           success: true,
//         });
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           message: '',
//         });
//       } else {
//         setStatus({
//           message: data.title || 'Oops! Something went wrong.',
//           success: false,
//         });
//       }
//     } catch (error) {
//       setStatus({ message: 'Oops! Something went wrong.', success: false });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
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
//                   className={
//                     isVisible ? 'animate__animated animate__fadeIn' : ''
//                   }
//                 >
//                   <h2>Будемо на зв'язку</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           placeholder="Призвіще"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleChange}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           placeholder="Ім'я"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleChange}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           placeholder="Email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           placeholder="Телефон"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           placeholder="Повідомлення"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                         ></textarea>
//                         <button type="submit" className="contact-btn">
//                           <span className="contact-btn-text">Відправити</span>
//                         </button>
//                       </Col>
//                       {status.message && (
//                         <Col>
//                           <p
//                             className={
//                               status.success === false ? 'danger' : 'success'
//                             }
//                           >
//                             {status.message}
//                           </p>
//                         </Col>
//                       )}
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Відправлення...');
    try {
      let response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText('Відправити');
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({
          success: false,
          message: 'Something went wrong, please try again later.',
        });
      }
    } catch (error) {
      setButtonText('Відправити');
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later.',
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
                        <button className="contact-btn" type="submit">
                          <span className="contact-btn-text">{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? 'danger' : 'success'
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
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
