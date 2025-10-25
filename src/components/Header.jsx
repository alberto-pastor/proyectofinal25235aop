import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <Navbar className="mb-4" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src='/img/Logo.png'
                        alt="Logo"
                        className="d-inline-block align-top me-2"
                    />
                    <span>Veni a degustar nuestro platos</span>
                </Navbar.Brand>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Novedades" className="me-3">Novedades</Nav.Link>
                    <Nav.Link as={Link} to="/Ofertas" className="me-3">Ofertas</Nav.Link>

                    <div className="d-flex align-items-center">
                        <Button variant="outline-light" as={Link} to="administracion" className="me-2">
                            Administración
                        </Button>
                        <Link to="carrito" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                        </Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;


