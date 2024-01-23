import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './Input.jsx';
import UserData from './Users.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Mans React ievades forma piemērs</h1>
      <InputForm />
      <UserData />
    </div>
  );
};

export default App;
