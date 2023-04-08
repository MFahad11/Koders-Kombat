import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Membership from '../membership/Membership';
import { useNavigate } from 'react-router-dom';
function Dialog({show,setShow,elem,title}) {
  const navigate=useNavigate()
  const handleClose = () =>{ setShow(false);navigate('/')};
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {elem}
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Dialog