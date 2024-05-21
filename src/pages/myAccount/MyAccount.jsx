import { useEffect } from 'react';
import { useUserById } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';
import './myAccount.css';

export const MyAccount = () => {
  const { userDetails, getUserById } = useUserById();
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      getUserById(user.id);
    }
  }, [getUserById]);

  if (!userDetails) {
    return <div>Error loading user details.</div>;
  }
  const handleEditClick = () => {
    navigate("/editUser");
  };
  return (
    <div className='body'>
      <div className="container">
        <h2>My Account</h2>
        <div className="card">
          <img src={userDetails.foto} alt="Profile" className="profile-img" />
          <div className="card-content">
            <h3>{`${userDetails.nombre} ${userDetails.apellido}`}</h3>
            <p>Email: {userDetails.email}</p>
            <div className="button-group">
              <button onClick={handleEditClick} className="btn edit-btn">Editar</button>
              <button className="btn delete-btn">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
