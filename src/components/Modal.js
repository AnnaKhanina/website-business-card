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
      <Modal.Header>
        <Modal.Title>Вам вже є 18 років?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={handleYesClick}
          className="modal-btn"
        >
          Так
        </Button>
        <Button variant="secondary" onClick={handleNoClick}>
          Ні
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
      window.location.href = 'https://www.google.com/';
    }
  };

  return (
    <div className="app">
      {showModal && <CustomModal onClose={handleCloseModal} />}
    </div>
  );
};
