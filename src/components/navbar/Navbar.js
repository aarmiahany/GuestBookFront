import React from 'react';
import {Navbar , Nav, Container} from 'react-bootstrap';
import './navbar.css';

export default function NavBar () {
    return (
        <Navbar className="navbar_container" variant="dark">
          <Container>   
            <Navbar.Brand>GuestBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/messages">Messages</Nav.Link>
                </Nav>  
                        <Nav>
                        <Nav.Link href="/signup">
                            <button className="btn nav_btns">Signup</button>
                        </Nav.Link>
                        <Nav.Link eventKey={2}href="/signin">
                            <button className="btn nav_btns">Signin</button>
                        </Nav.Link>
                        </Nav>
            </Navbar.Collapse>
          </Container> 
        </Navbar>
  
    )
}