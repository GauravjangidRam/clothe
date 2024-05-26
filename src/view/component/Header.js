
import '../../App.css';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
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
          <div className='cart-icon'>
          <a href="/AddTo"><box-icon name='cart-alt' color='#ece7e7' ></box-icon></a>
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
              {/* <Nav.Link href="/Register" className="register-style">
                REGISTER
              </Nav.Link> */}
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
}

