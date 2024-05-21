// MyAccount.jsx

import React, { useEffect } from 'react';
import { useUserById } from '../../shared/hooks';
import './myAccount.css';

export const MyAccount = () => {
  const { userDetails, getUserById } = useUserById();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      getUserById(user.id);
    }
  }, [getUserById]);



  if (!userDetails) {
    return <div>Error loading user details.</div>;
  }

  return (
    <div className='body'>
      
    <div className="container">
      <h2>My Account</h2>
      <div className="card">
        <img src={userDetails.foto} alt="Profile" className="profile-img" />
        <div className="card-content">
          <h3>{`${userDetails.nombre} ${userDetails.apellido}`}</h3>
          <p>Email: {userDetails.email}</p>
        </div>
      </div>
    </div>
    </div>
  );
};
