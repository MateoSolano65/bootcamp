'use client';
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Dropdown } from 'react-bootstrap';
import useRegister from 'lab1/hooks/useRegister';
import { useInputHook } from 'lab1/hooks/useInputHook';
import Image from 'next/image';
export const RegisterForm = () => {
  const [documentsTypeList] = useState([
    { id: 1, name: 'Cédula de Ciudadanía (CC)' },
    { id: 2, name: 'Tarjeta de Identidad (TI)' },
    { id: 3, name: 'Registro Civil (RC)' },
    { id: 4, name: 'Cédula de Extranjería (CE)' },
    { id: 5, name: 'Carné de Identidad (CI)' },
    { id: 6, name: 'Documento Nacional de Identidad (DNI)' },
  ]);

  const { value: inputEmail, bind: setInputEmail } = useInputHook('');
  const { value: inputName, bind: setInputName } = useInputHook('');
  const { value: inputSurname, bind: setInputSurname } = useInputHook('');
  const { value: inputIDType, bind: setInputIDType } = useInputHook('');
  const { value: inputIDNumber, bind: setInputIDNumber } = useInputHook('');
  const { value: inputPhone, bind: setInputPhone } = useInputHook('');
  const { value: inputAddress, bind: setInputAddress } = useInputHook('');
  const { value: inputPassword, bind: setInputPassword } = useInputHook('');

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  let [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const usersFromStorage =
      JSON.parse(localStorage.getItem('userRegister')) || [];
    setRegisteredUsers(usersFromStorage);
  }, []);

  const wordToCapitalize = (words) => {
    if (words !== null && words !== undefined && words.length > 0) {
      return words
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
    }
    return words;
  };
  const encodeBase64 = (word) => {
    let encodedStringBtoA = undefined;
    if (word !== null && word !== undefined && word.length > 0) {
      encodedStringBtoA = btoa(word);
    }
    return encodedStringBtoA;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    const newUser = {
      email: inputEmail,
      firstName: wordToCapitalize(inputName),
      lastName: wordToCapitalize(inputSurname),
      documentType: inputIDType,
      documentId: inputIDNumber,
      phone: inputPhone,
      address: inputAddress,
      password: encodeBase64(inputPassword),
    };
    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('userRegister', JSON.stringify(updatedUsers));
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
        <Image
          className="img-thumbnail mx-auto d-block mb-2"
          src="/images/logo_le_fances.png"
          alt="logo"
          width="100"
          height="100"
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
            {...setInputEmail}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputName">
          <Form.Label>Nombre(s)</Form.Label>
          <Form.Control
            type="text"
            value={inputName}
            placeholder="Nombre(s)"
            {...setInputName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputSurname">
          <Form.Label>Apellido(s)</Form.Label>
          <Form.Control
            type="text"
            value={inputSurname}
            placeholder="Apellido(s)"
            {...setInputSurname}
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="documentType"
          value={inputIDType}
          {...setInputIDType}
        >
          <Form.Label>Tipo de identificación:</Form.Label>
          <Form.Select
            id="documentType"
            name="documentType"
            aria-label="Default select example"
            required
          >
            <option value="">Seleccione un tipo de identificación</option>
            {documentsTypeList.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="inputIDNumber">
          <Form.Label>Número o ID de identificación</Form.Label>
          <Form.Control
            type="number"
            value={inputIDNumber}
            placeholder="Número o ID de identificación"
            {...setInputIDNumber}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            value={inputPhone}
            placeholder="Teléfono"
            {...setInputPhone}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            value={inputAddress}
            placeholder="Dirección"
            {...setInputAddress}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="inputPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            {...setInputPassword}
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
            <Form.Label>Ya tienes cuenta? ¡Inicia Sesión!</Form.Label>
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
