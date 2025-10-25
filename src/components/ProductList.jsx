import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ difficulty = null }) =>
    {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => 
    {
        let url = 'https://dummyjson.com/recipes/';
        if (difficulty)
        {
            url = `https://dummyjson.com/recipes/difficulty/${difficulty}`;
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.recipes);
            console.log(data.recipes);
            setLoading(false);
        })
     
        .catch((error) => {
            console.error('Error fetching data:  {error}');
            setLoading(false);
        })

    }, [difficulty]);

    const handleAgregarAlCarrito = (product) => {
        alert(`Producto ${product.name} agregado al carrito`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Row>
            {products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                    <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
