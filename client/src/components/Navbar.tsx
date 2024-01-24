import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { IsAuthenticated } from '../hooks/isAuthenticated';
import { UserContext } from '../context/userContext';

function CustomNavbar() {
  const { userId, username, setUser, clearUser } = useContext(UserContext)!;

  const LogOut = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/home" className="nav-text-color">
        <b>Programmer Hub</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" className="nav-text-color">
            <b>Home</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" className="nav-text-color">
            <b>Courses</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutUs" className="nav-text-color">
            <b>About Us</b>
          </Nav.Link>
        </Nav>
        <Nav>
          {IsAuthenticated() ? (
            <>
              <Nav.Link as={Link} to={`/Profile/${userId}`} className="nav-text-color">
                <b>{username}</b>
              </Nav.Link>
              <Nav.Link as={Link} onClick={LogOut} to="/home" className="nav-text-color">
                <b>LogOut</b>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/SignUp" className="nav-text-color">
                <b>SignUp</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/Login" className="nav-text-color">
                <b>Login</b>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
