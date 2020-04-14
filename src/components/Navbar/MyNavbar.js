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
          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/">
            Home
          </Link>

          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/login">
            Login
          </Link>

          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/register">
            Register
          </Link>

          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/about">
            About
          </Link>

          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/buy">
            Buy
          </Link>

          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/faq">
            FAQ
          </Link>
          <Link style={{ color: "#e1b12c", margin: "10px" }} to="/contact">
            Contact
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
