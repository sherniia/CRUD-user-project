import React from 'react'
import {Container, Navbar} from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../assets/logo-white.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Users CRUD App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
