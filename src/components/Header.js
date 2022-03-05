import React from 'react';
import CartDropdown from './CartDropdown';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar
        className="navbar"
        bg="dark"
        style={{ paddingBottom: '1rem' }}
        variant="dark"
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#home">Efiyahus shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </Nav>
        </Container>
        <CartDropdown />
      </Navbar>
    </div>
  );
};

export default Header;
