import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function UpdateForm({ user, setUpdatedUser }) {

    console.log(user, 'user form')

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = eUpdatevent.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleFirstName = (event) => {
    const userCopy = { ...user };
    userCopy.firstname = event.target.value;
    setUpdatedUser(userCopy);
  };
  const handleLastName = (event) => {
    const userCopy = { ...user };
    userCopy.lastname = event.target.value;
    setUpdatedUser(userCopy);
  };
  const handleEmail = (event) => {
    const userCopy = { ...user };
    userCopy.email = event.target.value;
    setUpdatedUser(userCopy);
  };
  const handleAvatar = (event) => {
    const userCopy = { ...user };
    userCopy.avatar = event.target.value;
    setUpdatedUser(userCopy);
  };
  const handleDate = (event) => {
    const userCopy = { ...user };
    userCopy.birthdate = event.target.value;
    setUpdatedUser(userCopy);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            value={user.firstname}
            onChange={(e) => handleFirstName(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" 
          value={user.lastname} 
          onChange={(e) => handleLastName(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" 
          value={user.email} 
          onChange={(e) => handleEmail(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control required type="text" 
          value={user.avatar} 
          onChange={(e) => handleAvatar(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control required type="date" 
          onChange={(e) => handleDate(e)}
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default UpdateForm;
