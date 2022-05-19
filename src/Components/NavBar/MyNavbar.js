import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './MyNavbar.css'

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <NavLink to='/' className='logo'>Camila's Store CR</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink to='/nosotros' className='myNavLink'>Nosotros</NavLink>
            <NavLink to='/servicios' className='myNavLink'>Servicios</NavLink>
            <NavLink to='/contacto' className='myNavLink'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar