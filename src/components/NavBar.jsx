import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../estilos/NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container class="NavbarItems">
          <Navbar.Brand href="/home" class="navbar-logo">
            Nombre <i class="fas fa-map-marked-alt "></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/seguridad">Seguridad</Nav.Link>
              <Nav.Link href="/ayuda">Ayuda</Nav.Link>
              <NavDropdown title="Compañia" id="basic-nav-dropdown">
                <NavDropdown.Item href="/compania">
                  Quienes somos
                </NavDropdown.Item>
                <NavDropdown.Item href="/lo-que-ofrecemos">
                  Lo que ofrecemos
                </NavDropdown.Item>
                <NavDropdown.Item href="como-funciona">
                  Como funciona
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <ButtonGroup>
              <Link to="/login">
                <Button className="justify-content-end">Iniciar Sesion</Button>
              </Link>
              <Link to="/registro">
                <Button className="justify-content-end ml-2">
                  Registrarse
                </Button>
              </Link>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
