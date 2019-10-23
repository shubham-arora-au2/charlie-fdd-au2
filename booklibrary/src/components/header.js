import React from 'react';
import {Navbar,Nav,Button,Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    
    render(){
        return (
            <Navbar bg="danger" variant="dark" sticky="top" className="shadow-lg rounded">
              <NavLink to="/">
            <Navbar.Brand style={{fontFamily: "'Anton', sans-serif",letterSpacing:"2px"}}>Book Library</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto font-weight-bold" style={{fontFamily: "'Open Sans', sans-serif"}}>
              <NavLink to="/search" className="nav-link" activeClassName='is-active'>
              Search</NavLink>
              <NavLink to="/profile" className="nav-link" activeClassName='is-active'>
              Library</NavLink>
            </Nav>
            <Form inline>
              <Button variant="outline-light" size="md">Logout</Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Header;