import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const TopNavbar: React.FC = () => {

  return (
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Frameworks de desarrollo web</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/frameworks">Frameworks</Nav.Link>
      <Nav.Link href="/agregar">Añadir</Nav.Link>
      <Nav.Link href="/about">Información del proyecto</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>

  );
};

export default TopNavbar;