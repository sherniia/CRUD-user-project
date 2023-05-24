import React from "react";
import { useState, useEffect} from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import CreateForm from "./CreateForm";

export default function ModalWindowCreate({
  show,
  toggleModal,
  createUser,
  setCreatedUser, 
  createdUser
}) {


  return (
    <>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm user = {createdUser}
           setCreatedUser= {setCreatedUser}></CreateForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              createUser(createdUser);
              toggleModal();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
