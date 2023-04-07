import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Membership from '../membership/Membership';
function Dialog({show,setShow}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Membership Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Membership/>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Dialog