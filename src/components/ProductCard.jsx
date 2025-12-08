import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, agregarAlCarrito }) => {
    return (
        <Card className="h-100 d-flex flex-column">
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid"
                style={{ height: '200px', objetFit: 'cover' }}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    💰 <strong>Precio:</strong> $ {Number(product.price)}                             
                </Card.Text>
                <Card.Text>
                    🍽️ <strong>Cocina:</strong> {product.cuisine}
                </Card.Text>
                <Card.Text>
                    ⏱️ <strong>Tiempo de Preparación:</strong> {product.prepTimeMinutes + product.cookTimeMinutes} min
                </Card.Text>
                
                <Button variant="primary" onClick={()=> agregarAlCarrito(product)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;

