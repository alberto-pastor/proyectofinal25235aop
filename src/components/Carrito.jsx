import React, { useEffect } from "react";
import Swal from "sweetalert2";

function Carrito() {
    useEffect(() => {
        Swal.fire({
            title: 'En Construcción',
            icon: 'success'
        });
    }, []);

    return (
        <div>
            {/* Puedes agregar contenido adicional aquí si lo deseas */}
        </div>
    );
}

export default Carrito;

