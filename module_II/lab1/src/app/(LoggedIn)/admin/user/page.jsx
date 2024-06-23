import Table from 'react-bootstrap/Table';

export default function UsersPage() {
  return (
    <>
      <h1>Tabla Detalle de Usuario</h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Correo</th>
            <th>Nombre(s)</th>
            <th>Apellido(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
