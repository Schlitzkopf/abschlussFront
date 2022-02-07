import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState();

  const handleLogIn = (e) => {
    e.preventDefault();
    const enterPasswort = e.target.firstChild.value;
    if (enterPasswort === "1234") {
      setLoggedIn(true);
    } else {
      alert("Falsches Passwort");
    }
  };

  return (
    <>
      {loggedIn ? (
        <div className="adminPadding container">
          <div className="">
            <Link to={"/erstellen"} type="button" className="btn btn-primary">
              Neues Tier erstellen?
            </Link>
          </div>
          <div className="adminPadding">
            <Link to={"/bearbeiten"} type="button" className="btn btn-primary">
              Tier bearbeiten oder löschen
            </Link>
          </div>
        </div>
      ) : (
        <div className="adminPadding container">
          <form className="justify-content-md-end" onSubmit={handleLogIn}>
            <input
              type="password"
              placeholder="Bitte Passwort eingeben."
            ></input>
            <button type="submit" className="btn btn-secondary">
              Anmelden
            </button>
          </form>
          <Link to={"/"} className="btn btn-secondary">
            Zurück
          </Link>
        </div>
      )}
    </>
  );
};

export default Admin;
