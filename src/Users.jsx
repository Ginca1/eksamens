import React, { useState, useEffect } from 'react';
import './App.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('http://localhost/darbi/eksamens/src/getData.php')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
   
    fetchUserData();

   
    const intervalId = setInterval(() => {
      fetchUserData();
    }, 1000); 

 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h2>Visi dati no datubazes.</h2>
      <ul>
        {users.map(user => (
            <div style={{ marginTop:'2%'}} className="row">
            <div className="box">
          <li key={user.id}>
            <strong>Name:</strong> {user.vards}, <strong>Email:</strong> {user['e-pasts']},{' '}
            <strong>Message:</strong> {user.zinojums}, <strong>Time:</strong> {user.laiks}
          </li>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
