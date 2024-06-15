import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useLogin } from 'lab1/hooks/useLogin';

export const LoginForm = () => {
  const {
    inputEmail,
    setInputEmail,
    inputPassword,
    setInputPassword,
    show,
    setShow,
    loading,
    handleSubmit,
  } = useLogin();

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img className="img-thumbnail mx-auto d-block mb-2" alt="logo" />
        <div className="h4 mb-2 text-center">Inicia Sesión</div>
        {/* Alert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Usuario o Contraseña incorrecta.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={inputEmail}
            placeholder="email@example.com"
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Ej: 1234abcd"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Recordame" />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Iniciando Sesión...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button className="text-muted px-1" variant="link" href="/register">
            <Form.Label>No tienes cuenta? </Form.Label>Regístrate
          </Button>
        </div>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Le Francés | &copy;2024
      </div>
    </div>
  );
};
