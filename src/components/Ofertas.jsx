import React from "react";
import ProductList from "./ProductList";

const Ofertas = () =>{
    return(
        <div className="container">
            <h1>Ofertas - Pollo</h1>
            <ProductList tag="Chicken"/>
        </div>
    );
};

export default Ofertas;
