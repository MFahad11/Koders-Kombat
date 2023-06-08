import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Membership from '../membership/Membership';
import { useNavigate } from 'react-router-dom';
function Dialog({show,setShow,elem,title,navigate:nav,page}) {
  const navigate=useNavigate()
  const handleClose = () =>{ setShow(false);navigate(nav||-1)};
  const handleShow = () => setShow(true);
  console.log(page)
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div style={page==="calendar"?{background:"aqua"}:{}}><Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {elem}
        </Modal.Body></div>
      </Modal>
      
    </>
  );
}

export default Dialog