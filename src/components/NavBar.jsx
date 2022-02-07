import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../estilos/NavBar.css'

function NavBar() {
  return (
    <div >
      <Navbar bg="dark" expand="lg">
        <Container class="NavbarItems">
          <Navbar.Brand href="#home" class='navbar-logo'>Nombre <i class="fas fa-map-marked-alt "></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Seguridad</Nav.Link>
              <Nav.Link href="#link">Ayuda</Nav.Link>
              <NavDropdown title="Compañia" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Quienes somos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Lo que ofrecemos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
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
