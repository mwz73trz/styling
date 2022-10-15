import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modalData from "../data/modalData";

const ModalStyle = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-container">
      {modalData.map((item, index) => (
        <>
          <Button key={index} variant="primary" onClick={handleShow}>
            {item.brand}
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Body>{item.brand}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Header>
          </Modal>
        </>
      ))}
    </div>
  );
};

export default ModalStyle;
