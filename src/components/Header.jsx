import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Header = () => {
    const { carrito } = useContext(CartContext);
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    
    return(
        <Navbar className="mb-4" bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src='/img/Logo.png'
                        alt="Logo"
                        className="d-inline-block align-top me-2"
                    />
                    <span className="fs-3">Veni a degustar nuestro platos!!</span>
                </Navbar.Brand>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Novedades" className="me-3">Novedades</Nav.Link>
                    <Nav.Link as={Link} to="/Ofertas" className="me-3">Ofertas</Nav.Link>

                    <div className="d-flex align-items-center">
                        <Button variant="outline-dark" as={Link} to="/administracion" className="me-2">
                            Administración
                        </Button>
                        
                        <Link to="/Carrito" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                            {totalItems > 0 && (
                                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {totalItems}
                                </Badge>
                            )}
                        </Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;


