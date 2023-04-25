import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddMovie = ({ show, handleClose, addNewMovie }) => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                value={rate}
                onChange={(event) => setRate(event.target.value)}
              />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addNewMovie({
                name,
                rate
              });
              setName("");
              setRate("");
              handleClose();
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
