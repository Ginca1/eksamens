import React, { useState } from 'react';
import './App.css';

const InputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

 
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    setNameError('');
    setEmailError('');
    setMessageError('');
    setSuccessMessage('');

 
    if (!name.trim()) {
      setNameError('Vārds ir obligāts');
      return;
    }

    if (!email.trim()) {
      setEmailError('E-pasts ir obligāts');
      return;
    }

    if (!message.trim()) {
      setMessageError('Ziņojums ir obligāts');
      return;
    }

    try {
      const response = await fetch('http://localhost/darbi/eksamens/src/saveData.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name,
          email,
          message,
        }),
      });

      const result = await response.text();
      console.log(result);

    
      if (response.ok) {
        setSuccessMessage('Dati saglabāti veiksmīgi!');
      } else {
      
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="main">
        <div className="insert">
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop:'10%'}} className="row">
        <label>
          Vārds:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        
        <p style={{ color:'red'}} >{nameError}</p>
        <br />
        </div>
<div className="row">
        <label>
          E-pasts:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <p style={{ color:'red'}} >{emailError}</p>
        <br />
        </div>
        <div className="row">
        <label>
          Ziņojums:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        </div>
        <p style={{ color:'red'}}  >{messageError} </p>
        <br />
        <div className="row">
        <p style={{ color:'green'}} >{successMessage}</p>
        </div>
<div style={{ marginTop:'0%'}} className="row">
        <button type="submit">Nosūtīt</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default InputForm;