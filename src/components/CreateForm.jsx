import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from 'uuid';

function CreateForm({user, setCreatedUser}) {

    // const createdUser = {
    //     id: uuidv4(),
    //     password: uuidv4()
    // };
    const createdUser = {...user};

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
    createdUser['firstname'] = event.target.value
    // setCreatedUser(createdUser);
    console.log(createdUser);
  };
  const handleLastName = (event) => {
    createdUser['lastname'] = event.target.value
    setCreatedUser(createdUser);
  };
  const handleEmail = (event) => {
    createdUser['email'] = event.target.value
    setCreatedUser(createdUser);
  };
  const handleAvatar = (event) => {
    createdUser['avatar'] = event.target.value
    setCreatedUser(createdUser);
  };
  const handleDate = (event) => {
    createdUser['birthdate'] = event.target.value
    setCreatedUser(createdUser);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e) => handleFirstName(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" 
          onChange={(e) => handleLastName(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" 
          onChange={(e) => handleEmail(e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control required type="text" 
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

export default CreateForm;
