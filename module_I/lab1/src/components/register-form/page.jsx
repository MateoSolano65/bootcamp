import React, { useState } from 'react';
import { Form, Button, Alert, Dropdown } from 'react-bootstrap';
import useRegister from 'lab1/hooks/useRegister';

export const RegisterForm = () => {
  const [inputEmail, setInputEmail] = useRegister('inputEmail', '');
  const [inputName, setInputName] = useRegister('inputName', '');
  const [inputSurname, setInputSurname] = useRegister('inputSurname', '');
  const [inputIDType, setInputIDType] = useRegister('inputIDType', '');
  const [inputIDNumber, setInputIDNumber] = useRegister('inputIDNumber', '');
  const [inputPhone, setInputPhone] = useRegister('inputPhone', '');
  const [inputAddress, setInputAddress] = useRegister('inputAddress', '');
  const [inputPassword, setInputPassword] = useRegister('inputPassword', '');

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`
      Email: ${inputEmail},
      Name: ${inputName},
      Surname: ${inputSurname},
      ID Type: ${inputIDType},
      ID Number: ${inputIDNumber},
      Phone: ${inputPhone},
      Address: ${inputAddress},
      Password: ${inputPassword}
    `);

    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    setter(value);
  };

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          // src={logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Regístrate</div>
        {/* Alert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Hubo un error en el registro.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="inputEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={inputEmail}
            placeholder="email@example.com"
            onChange={handleInputChange(setInputEmail)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputName">
          <Form.Label>Nombre(s)</Form.Label>
          <Form.Control
            type="text"
            value={inputName}
            placeholder="Nombre(s)"
            onChange={handleInputChange(setInputName)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputSurname">
          <Form.Label>Apellido(s)</Form.Label>
          <Form.Control
            type="text"
            value={inputSurname}
            placeholder="Apellido(s)"
            onChange={handleInputChange(setInputSurname)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputIDType">
          <Form.Label>Tipo de identificación</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              {inputIDType ? inputIDType : 'Selecciona tipo'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setInputIDType('Cédula de Ciudadanía')}
              >
                Cédula de Ciudadanía
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setInputIDType('Tarjeta de Identidad')}
              >
                Tarjeta de Identidad
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setInputIDType('Registro Civil')}>
                Registro Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setInputIDType('Cédula de Extranjería')}
              >
                Cédula de Extranjería
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setInputIDType('Carné de Identidad')}
              >
                Carné de Identidad
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setInputIDType('Documento Nacional de Identidad')
                }
              >
                Documento Nacional de Identidad
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="mb-2" controlId="inputIDNumber">
          <Form.Label>Número o ID de identificación</Form.Label>
          <Form.Control
            type="number"
            value={inputIDNumber}
            placeholder="Número o ID de identificación"
            onChange={handleInputChange(setInputIDNumber)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            value={inputPhone}
            placeholder="Teléfono"
            onChange={handleInputChange(setInputPhone)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            value={inputAddress}
            placeholder="Dirección"
            onChange={handleInputChange(setInputAddress)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={handleInputChange(setInputPassword)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Registrarme
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Registrando...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button className="text-muted px-1" variant="link" href="/login">
            <Form.Label>Ya tienes cuenta? </Form.Label>¡Inicia Sesión!
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
