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
                    <p>💰 <strong>Precio:</strong> $ {product.caloriesPerServing * 20}</p>                             
                    <p>🍽️ <strong>Cocina:</strong> {product.cuisine}</p>
                    <p>⏱️ <strong>Tiempo de Preparación:</strong> {product.prepTimeMinutes + product.cookTimeMinutes} min</p>
                </Card.Text>
                <Button variant="primary" onClick={()=> agregarAlCarrito(product)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;

