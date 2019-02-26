import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Menu =() => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Top Home Loan Products
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem active eventKey={1} href="#">ALL</NavItem>
        <NavItem eventKey={2} href="#">REFINANCE</NavItem>
        <NavItem eventKey={3} href="#">FIXED RATE</NavItem>
        <NavItem eventKey={4} href="#">FIRST HOME BUYER</NavItem>
        <NavItem eventKey={5} href="#">INVESTOR</NavItem>
        <NavItem eventKey={6} href="#">NEXT HOME BUYER</NavItem>
    </Nav>
  </Navbar>
);

export default Menu;