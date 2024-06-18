import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export const Sidebar = ({ children }) => {
  const [perfilOpen, setPerfilOpen] = useState(false);

  const togglePerfil = () => {
    setPerfilOpen(!perfilOpen);
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 pc-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              href="/admin"
              className="d-flex align-items-center pb-3 mb-md-1 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Le Francés
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  href="#"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  href="#"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Usuarios</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  href="/admin/product"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 ms-2 bi bi-basket3-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Productos</span>
                </Link>
              </li>
              <li className="w-100">
                <a
                  href="#"
                  className="nav-link text-white px-0 align-middle"
                  onClick={(e) => {
                    e.preventDefault();
                    togglePerfil();
                  }}
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Perfil</span>
                </a>
                {perfilOpen && (
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link href="/admin/profile" passHref>
                        <div className="nav-link text-white px-0">
                          <span className="ms-4 d-none d-sm-inline">
                            Detalle
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#" passHref>
                        <div className="nav-link text-white px-0">
                          <span className="ms-4 d-none d-sm-inline">
                            Eliminar Perfil
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="w-100">
                <Link
                  href="#"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-box-arrow-right ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">{children}</div>
      </div>
    </div>
  );
};
