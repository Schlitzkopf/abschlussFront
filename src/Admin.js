import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState();

  const handleLogIn = (e) => {
    e.preventDefault();
    const enterPasswort = e.target.firstChild.value;
    if (enterPasswort === "1766") {
      setLoggedIn(true);
    } else {
      alert("Falsches Passwort");
    }
  };

  return (
    <>
      {loggedIn ? (
        <div className="container  mt-5 mb-5 ueberschriften">
          <h3 className="pl-5" >Was möchtest du tun?</h3>
          <div className="btn-group mt-5 mb-5 p-5">
            <Link to={"/erstellen"} type="button" className="btn btn-primary margin">
              Neues Tier erstellen?
            </Link>
            <Link to={"/bearbeiten"} type="button" className="btn btn-primary margin">
              Tier bearbeiten oder löschen
            </Link>
          </div>
        </div>
      ) : (
        <div className="anmeldenPaddingBack container btn-group">
          <form className="justify-content-md-end" onSubmit={handleLogIn}>
            <input
              type="password"
              placeholder="Bitte Passwort eingeben."
            ></input>
            <button type="submit" className="btn btn-primary margin">
              Anmelden
            </button>
          <Link to={"/"} className="btn btn-primary">
            Zurück
          </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default Admin;
