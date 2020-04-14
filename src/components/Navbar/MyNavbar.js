import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <div style={{ background: "#273c75", padding: "15px" }}>
      <Navbar>
        <Navbar.Brand href="#home" style={{ color: "white", fontSize: "20px" }}>
          Project-3
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "#e1b12c" }}>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/login">Login</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/register">Register</Link>
          </Nav.Link>

          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/buy">Buy</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/faq">FAQ</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#f5f6fa" }}>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
