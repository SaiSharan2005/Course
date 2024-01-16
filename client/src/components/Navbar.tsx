// // tsdrpfc
// import * as React from 'react';
// import { Link } from 'react-router-dom';

// export interface INavbarProps {
// }

// function Navbar(props: INavbarProps) {
//   return (
//     <div className="navbar-custom">
//       <nav className="navbar navbar-expand-lg  navbar-custom">
//         <div className="container-fluid">
//           <a className="navbar-brand nav-text-color" href="{% url 'home'  %}">Programmer Hub</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link nav-text-color " aria-current="page" href="{% url 'home' %}">Home</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link nav-text-color" href="{% url 'courses' %}">Courses</a>
//               </li>
//             </ul>

//             <ul className="navbar-nav  ">

//               <li className="nav-item">
//                 <Link to="/SignUp">
//                   SignUp
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to="/Login">
//                   Login
//                 </Link>
//               </li>

//             </ul>
//           </div>
//         </div>
//       </nav></div>
//   );
// }


// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/home" className="nav-text-color">
        Programmer Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" className="nav-text-color">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" className="nav-text-color">
            Courses
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/SignUp">
            SignUp
          </Nav.Link>
          <Nav.Link as={Link} to="/Login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
