
import '../../App.css';
import { useEffect, useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'boxicons';

export default function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, []);

  return (
    <>
    
      <Navbar className="Navbar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="brand" href="/">
          CloTheS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="section">
              <Nav.Link href="/Men" className="item-style">
                MEN
              </Nav.Link>
              <Nav.Link href="/Women" className="item-style">
                WOMEN
              </Nav.Link>
              <Nav.Link href="/Kids" className="item-style">
                KIDS
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search-btn" variant="outline-light">
              Search
            </Button>

          </Form>

          <div>
          <a href="/AddToCart"><box-icon name='cart-alt' color='#ece7e7' ></box-icon></a>
          </div>
          {user ? (
            <Nav.Link href="/Logout" className="logout-style">
              LOGOUT
            </Nav.Link>
          ) : (
            <div className="logStatus">
              <Nav.Link href="/Login" className="login-style">
                LOGIN <span></span>
              </Nav.Link>
              <Nav.Link href="/Register" className="register-style">
                REGISTER
              </Nav.Link>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
}

