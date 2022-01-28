import React, { useState } from 'react';

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState();

    const handleLogIn = (e) => {
       //Value des InputFeld mit meinem Passwort vergleichen. Wenn Passwort gleich => loggedIn: True
       e.preventDefault()
       const enterPasswort = e.target.firstChild.value
        if (enterPasswort === "GustavGans") {
            setLoggedIn(true);
        }else {
            alert('Falsches Passwort');
        }

    }


  return (<div>
      {loggedIn ? (
          <div>
              <p>Your logged in</p>
          </div>
      ):(      
          <form onSubmit={handleLogIn}>
          <input type="password" placeholder='Bitte Passwort eingeben.'></input>
          <button type='submit'>Anmelden</button>
      </form>)}


  </div>);
};

export default Admin;
