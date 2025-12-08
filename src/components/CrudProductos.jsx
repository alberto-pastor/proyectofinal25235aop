import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const API_URL = 'https://692b7640c829d464006cf3ef.mockapi.io/productos/';

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        mealType: "",
        name: "",
        cuisine: "",
        price: "",
        prepTimeMinutes: "",
        cookTimeMinutes: "",
        image: "",
    });

    const [editId, setEditId] = useState(null);
    //fetch --> obtener datos de productos
    const getProductos = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al obtenet productos:", error));
    };
    //cerrar formulario modal
    const handleClose = () => {
        setShow(false);
        setForm({ mealType: "", name: "", cuisine: "", price: "", prepTimeMinutes: "",cookTimeMinutes: "", image: "" });
        setEditId(null);
    };

    const handleShow = (producto) => {
        setShow(true);
        if (producto) {
            setForm({
                ...producto,
                price: Number(producto.price),
                prepTimeMinutes: Number(producto.prepTimeMinutes),
                cookTimeMinutes: Number(producto.cookTimeMinutes),
            });
            setEditId(producto.id);
        }
    }

    //crear o editar
    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            ...form,
            price: Number(form.price),
            prepTimeMinutes: Number(form.prepTimeMinutes),
            cookTimeMinutes: Number(form.cookTimeMinutes),
        };

        const method = editId ? "PUT" : "POST";
        const url = editId ? `${API_URL}/${editId}` : API_URL;

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData),
        })
            .then((res) => {
                if(!res.ok) throw new Error("Error al guardar el producto");
                return res.json();
            })
            .then(()=>{
                handleClose();
                getProductos();
            })
            .catch((error) => console.error("Error:", error));
    };

    const eliminarProducto = async (id) => {
        if (!window.confirm('¿Seguro que quieres eliminar este producto?')) return ;
        
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then((res) =>{
                if(!res.ok) throw new Error("Error al eliminar el producto");
                getProductos();
            })
            .catch((error)=>console.error("Error:", error));
    };

    //cargar los productos
    useEffect(()=>{
        getProductos();
    },[]);

return (
    <div className="container mt-4">
      <h2>CRUD de Productos</h2>
      <Button className="mb-3" onClick={() => handleShow()}>Agregar Producto</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Cocina</th>
            <th>Precio</th>
            <th>Preparación</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(prod => (
            <tr key={prod.id}>
              <td>{prod.mealType}</td>
              <td>{prod.name}</td>
              <td>{prod.cuisine}</td>
              <td>$ {Number(prod.price)}</td>
              <td>{prod.prepTimeMinutes + prod.cookTimeMinutes} min</td>
              <td>
                {prod.image?.startsWith('http') ? (
                  <img src={prod.image} alt={prod.title} width={50} />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>
                <Button size="sm" onClick={() => handleShow(prod)}>Editar</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => eliminarProducto(prod.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Editar' : 'Agregar'} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                value={form.mealType}
                onChange={e => setForm({ ...form, mealType: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tipo de Cocina</Form.Label>
              <Form.Control
                value={form.cuisine}
                onChange={e => setForm({ ...form, cuisine: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tiempo de Preparación</Form.Label>
              <Form.Control
                type="number"
                value={form.prepTimeMinutes}
                onChange={e => setForm({ ...form, prepTimeMinutes: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tiempo de Cocción</Form.Label>
              <Form.Control
                type="number"
                value={form.cookTimeMinutes}
                onChange={e => setForm({ ...form, cookTimeMinutes: Number(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={e => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-2">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrudProductos;




