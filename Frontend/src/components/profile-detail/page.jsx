import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';

export const ProfileDetail = () => {
  return (
    <div className="profile-detail__wrapper">
      {/* Detalle del perfil */}
      <Form className="shadow p-4 bg-white rounded">
        {/* Header */}
        <Image
          className="img-thumbnail mx-auto d-block mb-2"
          src="/images/logo_le_fances.png"
          alt="logo"
          width="100"
          height="100"
        />
        <div className="h4 mb-2 text-center">Perfil de Usuario</div>

        {/* Campos no editables */}
        <Form.Group className="mb-2" controlId="inputEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue="usuario@example.com"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputName">
          <Form.Label>Nombre(s)</Form.Label>
          <Form.Control type="text" defaultValue="Nombre" disabled />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputSurname">
          <Form.Label>Apellido(s)</Form.Label>
          <Form.Control type="text" defaultValue="Apellido" disabled />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputIDType">
          <Form.Label>Tipo de identificación</Form.Label>
          <Form.Control
            type="text"
            defaultValue="Cédula de Ciudadanía (CC)"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputIDNumber">
          <Form.Label>Número o ID de identificación</Form.Label>
          <Form.Control type="text" defaultValue="123456789" disabled />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" defaultValue="1234567890" disabled />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" defaultValue="Dirección" disabled />
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
