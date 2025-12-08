import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Swal from 'sweetalert2';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { CartContext } from "./CartContext";

const ProductList = ({ cuisine = null }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {
        //let url = 'https://dummyjson.com/recipes/';
        let url = 'https://692b7640c829d464006cf3ef.mockapi.io/productos/';
        if (cuisine === 'Italian') {
            //url = `https://dummyjson.com/recipes/tag/${tag}`;
            //url = 'https://692b7640c829d464006cf3ef.mockapi.io/productos?cuisine=$cuisine';
            url = 'https://692b7640c829d464006cf3ef.mockapi.io/productos?cuisine=Italian';
        } else if (cuisine === 'Asian') {
            url = 'https://692b7640c829d464006cf3ef.mockapi.io/productos?cuisine=Asian';
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //setProducts(data.recipes);
                setProducts(data);
                setLoading(false);
            })

            .catch((error) => {
                console.error('Error fetching data:  {error}');
                setLoading(false);
            })

    }, [cuisine]);

    const handleAgregarAlCarrito = (product) => {
        agregarAlCarrito(product);
        
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
