import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Swal from 'sweetalert2';
import { icon } from '@fortawesome/fontawesome-svg-core';

const ProductList = ({ tag = null }) =>
    {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => 
    {
        let url = 'https://dummyjson.com/recipes/';
        if (tag)
        {
            url = `https://dummyjson.com/recipes/tag/${tag}`;
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.recipes);
            setLoading(false);
        })
     
        .catch((error) => {
            console.error('Error fetching data:  {error}');
            setLoading(false);
        })

    }, [tag]);

    const handleAgregarAlCarrito = (product) => {
        Swal.fire({
            title: `Producto ${product.name} Agregado al carrito`,
            icon: 'success'
        });
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
