import React from "react";
import ProductList from "./ProductList";

const Ofertas = () =>{
    return(
        <div className="container">
            <h1>Ofertas - Platos Asiaticos</h1>
            <ProductList cuisine="Asian"/>
        </div>
    );
};

export default Ofertas;
