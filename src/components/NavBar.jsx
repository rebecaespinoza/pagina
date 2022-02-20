import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../estilos/NavBar.css'

function NavBar() {
  return (
    <div >
      <Navbar bg="dark" expand="lg">
        <Container class="NavbarItems">
          <Navbar.Brand href='/home' class='navbar-logo'  style={{color:'#fff'}}>Nombre <i class="fas fa-map-marked-alt "></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href='/inicio' style={{color:'#fff'}}>Inicio</Nav.Link>
              <Nav.Link href='/seguridad'  style={{color:'#fff'}}>Seguridad</Nav.Link>
              <Nav.Link href='/ayuda'  style={{color:'#fff'}}>Ayuda</Nav.Link>
              <NavDropdown title="Compañia"  id="basic-nav-dropdown" color="#fff">
                <NavDropdown.Item href='/compania' >Quienes somos</NavDropdown.Item>
                <NavDropdown.Item href='/lo-que-ofrecemos'>
                  Lo que ofrecemos
                </NavDropdown.Item>
                <NavDropdown.Item href='como-funciona'>
                  Como funciona
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ButtonGroup>
            
          <Link to='/login'><Button className="justify-content-end" >Iniciar Sesion</Button></Link>
          <Link to='/registro'><Button className="justify-content-end ml-2">Registrarse</Button></Link>
          </ButtonGroup>

        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
