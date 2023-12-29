'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/books">See your books.</Nav.Link>
            <Nav.Link href="/addBook">Add a book.</Nav.Link>
            <Nav.Link href="/removeBook">Remove a book.</Nav.Link>
            <Nav.Link href="/compareBooks">Compare books.</Nav.Link>
            <Nav.Link href="/monitoreBooks">Monitore books.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
