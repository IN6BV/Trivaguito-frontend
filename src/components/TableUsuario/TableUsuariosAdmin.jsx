import React, { useEffect } from 'react';
import { useFetchUsers } from "../../shared/hooks/useFetchUsers";
import "../../pages/myAccount/myAccount.css";

export const TableUsuarioRegiste = () => {
  const { users, getUsers} = useFetchUsers();

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="container">
      <h2 className="caption">Usuarios Registrados</h2>
      <div className="tableContainer">
        <table className="crud-table">
          <thead>
            <tr className="crud-table__row">
              <th className="crud-table__header-cell">Nombre</th>
              <th className="crud-table__header-cell">Apellido</th>
              <th className="crud-table__header-cell">Foto</th>
              <th className="crud-table__header-cell">Email</th>
              <th className="crud-table__header-cell">Contraseña</th>
              <th className="crud-table__header-cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="crud-table__row">
                <td className="crud-table__cell">{user.nombre}</td>
                <td className="crud-table__cell">{user.apellido}</td>
                <td className="crud-table__cell">
                  <img
                    src={user.foto}
                    alt={`${user.nombre} ${user.apellido}`}
                    className="user-photo"
                  />
                </td>
                <td className="crud-table__cell">{user.email}</td>
                <td className="crud-table__cell">{user.password}</td>
                <td className="crud-table__cell">
                  {/* Agrega botones de acciones aquí */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
