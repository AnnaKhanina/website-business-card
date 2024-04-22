import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ onClose }) => {
  const handleYesClick = () => {
    onClose(true);
  };

  const handleNoClick = () => {
    onClose(false);
  };

  return (
    <Modal show={true} onHide={handleNoClick}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Вам вже є 18 років?</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>Вам вже є 18 років?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleNoClick}>
          Нет
        </Button>
        <Button variant="primary" onClick={handleYesClick}>
          Да
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalWindow = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = (isOver18) => {
    setShowModal(false);
    if (!isOver18) {
      window.location.href = 'https://example.com';
    }
  };

  return (
    <div className="app">
      {showModal && <CustomModal onClose={handleCloseModal} />}
    </div>
  );
};
