import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

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

            {/* <Nav.Link href="/Men" className='nav-style'>MEN </Nav.Link>

            <Nav.Link href="/Women"  className='nav-style'>WOMEN</Nav.Link>
            <Nav.Link href="/Kids"  className='nav-style'>KIDS</Nav.Link> */}

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
