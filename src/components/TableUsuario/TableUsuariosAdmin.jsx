import { useState, useEffect } from 'react';
import { getUser } from '../../services/api';

export const TableUsuarioRegiste = () => {
    const [users, setUsers] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const result = await getUser();
          if (!result.error) {
            setUsers(result.data);
          } else {
            setError(result.e);
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    if (isLoading) {
      return <p>Cargando usuarios...</p>;
    }
  
    if (error) {
      return <p>Error al cargar usuarios: {error.message}</p>;
    }
  
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
              {users.map((u, index) => (
                <tr key={index} className="crud-table__row">
                  <td className="crud-table__cell">{u.nombre}</td>
                  <td className="crud-table__cell">{u.apellido}</td>
                  <td className="crud-table__cell">
                    <img src={u.foto} alt={`${u.nombre} ${u.apellido}`} className="user-photo" />
                  </td>
                  <td className="crud-table__cell">{u.email}</td>
                  <td className="crud-table__cell">{u.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};