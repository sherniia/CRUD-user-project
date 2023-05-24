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
import UpdateForm from "./UpdateForm";

export default function ModalWindowUpdate({
  show,
  toggleModal,
  selectedUser,
  setSelectedUser, 
  updateUser
}) {

  return (
    <>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateForm user={selectedUser} setUpdatedUser = {setSelectedUser}></UpdateForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateUser(selectedUser.id, selectedUser);
              toggleModal()
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
