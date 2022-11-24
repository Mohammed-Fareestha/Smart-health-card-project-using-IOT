import React from 'react';
import './doctorLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function DoctorLogin() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='navtop'>
      <Container>
        <Navbar.Brand className="navitem" href="/">Hello DOC!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="navitem" href="#features" disabled>For DOCTORS</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown className="navitem" title="More tools" id="collasible-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='log'>
  <div class="box" >
        <div class="form" >
            <h1 className='hello'>Hello, Doctor</h1>
            <div class="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
                <i></i>
            </div>
           
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <div class="link">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" value="login"/>
        </div>
    </div>
  </div>
</div>
  );
}

export default DoctorLogin;
