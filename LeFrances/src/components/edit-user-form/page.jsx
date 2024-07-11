import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';

export const EditUserForm = () => {
  return (
    <div className="sign-in__wrapper">
      {/* Formulario de edición */}
      <Form className="shadow p-4 bg-white rounded">
        {/* Header */}
        <Image
          className="img-thumbnail mx-auto d-block mb-2"
          src="/images/logo_le_fances.png"
          alt="logo"
          width="100"
          height="100"
        />
        <div className="h4 mb-2 text-center">Editar Perfil</div>

        {/* Campos editables */}
        <Form.Group className="mb-2" controlId="inputName">
          <Form.Label>Nombre(s)</Form.Label>
          <Form.Control type="text" defaultValue="Nombre" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputSurname">
          <Form.Label>Apellido(s)</Form.Label>
          <Form.Control type="text" defaultValue="Apellido" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" defaultValue="1234567890" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" defaultValue="Dirección" />
        </Form.Group>

        {/* Botones (sin funcionalidad) */}
        <Button className="w-100 mb-2" variant="primary" type="button">
          Actualizar Información
        </Button>
        <Button className="w-100 mb-2" variant="secondary" type="button">
          Cambiar Password
        </Button>
        <Button className="w-100" variant="danger" type="button">
          Eliminar Cuenta
        </Button>

        {/* Footer */}
        <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
          Le Francés | &copy;2024
        </div>
      </Form>
    </div>
  );
};
