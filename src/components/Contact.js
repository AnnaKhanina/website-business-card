import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactImg from '../assets/img/king.png';
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
  const [loading, setLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+38\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email ||
      !formDetails.phone ||
      !formDetails.message
    ) {
      toast.error('Будь ласка, заповніть усі поля.', {
        containerId: 'main-toast',
      });
      return;
    }

    if (!validateEmail(formDetails.email)) {
      toast.error('Введіть дійсний email латиницею.', {
        containerId: 'main-toast',
      });
      return;
    }

    if (!validatePhone(formDetails.phone)) {
      toast.error('Введіть дійсний номер телефону у форматі +38XXXXXXXXXX.', {
        containerId: 'main-toast',
      });
      return;
    }

    setLoading(true);
    setButtonText('Відправлення...');
    try {
      let response = await axios.post('/api/contact', formDetails);
      setButtonText('Відправити');
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
    } finally {
      setLoading(false);
      setButtonText('Відправити');
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
                  <h3>Відкрити до співпраці</h3>
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
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Телефон +38 _ _ _"
                          onChange={(e) =>
                            onFormUpdate('phone', e.target.value)
                          }
                          required
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
                          required
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
                              buttonText
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
