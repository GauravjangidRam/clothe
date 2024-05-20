import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import '../../App.css';

export default function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, []);

  return (
    <>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

      <nav>
        <Navbar className="Navbar" bg="dark" data-bs-theme="dark">
          <Navbar.Brand className="brand" href="/">
            CloTheS
          </Navbar.Brand>
          <Nav className="list-style">
            <div className="section">
              <ul>
                <li>
                  <a href="/Men">MEN</a>
                </li>
                <li>
                  <a href="/Women">WOMEN</a>
                </li>
                <li>
                  <a href="/Kids">KIDS</a>
                </li>
              </ul>
            </div>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>

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
          </Nav>
        </Navbar>

        <br />
      </nav>
    </>
  );
}
