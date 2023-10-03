import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavExample() {
  return (
    <Navbar expand="md" className="bg-purple" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="titulo">Bryan's Outlet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Masculino">Masculino</Nav.Link>
            <Nav.Link href="/Feminino">Feminino</Nav.Link>
            <Nav.Link href="/Casual">Casual</Nav.Link>
            <Nav.Link href="/Outlet">Outlet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Carrinho">Carrinho</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavExample;