import React, { useState } from "react";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState();

  const handleLogIn = (e) => {
    //Value des InputFeld mit meinem Passwort vergleichen. Wenn Passwort gleich => loggedIn: True
    e.preventDefault();
    const enterPasswort = e.target.firstChild.value;
    if (enterPasswort === "1234") {
      setLoggedIn(true);
    } else {
      alert("Falsches Passwort");
    }
  };
  const newAnimal = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="container">
      {loggedIn ? (
        <form onSubmit={newAnimal} className="needs-validation" novalidate>
          <form>
            {/* Name */}
            <div className="row mb-3 col-md-6">
              <label for="inputName" className="col-sm-2 col-form-label">
                Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte den Name eingeben"
                  id="inputName3"
                />
              </div>
            </div>
            {/* Rasse */}
            <div className="row mb-3 col-md-6">
              <label for="inputRasse" className="col-sm-2 col-form-label">
                Rasse:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte Rasse angeben."
                  id="inputRasse3"
                />
              </div>
            </div>
            {/* Gewicht */}
            <div className="row mb-3 col-md-6">
              <label for="inputGewicht" className="col-sm-2 col-form-label">
                Gewicht:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte Gewicht angeben."
                  id="inputGewicht3"
                />
              </div>
            </div>
            {/* Geschlecht */}
            <fieldset className="row mb-3 col-md-6">
              <legend className="col-form-label col-sm-2 pt-0">Geschlecht?</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Geschlecht"
                    id="gridRadio1"
                    value="Männlich"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Männlich
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Geschlecht"
                    id="gridRadios2"
                    value="Weiblich"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Weiblich
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Gechipt */}
            <fieldset className="row mb-3 col-md-6">
              <legend className="col-form-label col-sm-2 pt-0">Gechipt?</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gechipt"
                    id="gridRadios3"
                    value="Ja"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gechipt"
                    id="gridRadios4"
                    value="Nein"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Geimpft */}
            <fieldset className="row mb-3 col-md-6">
              <legend className="col-form-label col-sm-2 pt-0">Geimpft?</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Geimpft"
                    id="gridRadios5"
                    value="Ja"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Geimpft"
                    id="gridRadios6"
                    value="Nein"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Kastriert */}
            <fieldset className="row mb-3 col-md-6">
              <legend className="col-form-label col-sm-2 pt-0">Kastriert?</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Kastriert"
                    id="gridRadios7"
                    value="Ja"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Kastriert"
                    id="gridRadios8"
                    value="Nein"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Kinderfreundlich */}
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Ist das Tier Kinderfreundlich?
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Kinderfreundlich"
                    id="gridRadios11"
                    value="Ja"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Kinderfreundlich"
                    id="gridRadios12"
                    value="Nein"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Verträglich mit andern Tieren */}
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Verträglich mit Anderen Tieren?
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Verträglich"
                    id="gridRadios9"
                    value="Ja"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Verträglich"
                    id="gridRadios10"
                    value="Nein"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Geburtstag */}
            <div className="row mb-3 col-md-6">
              <label for="inputGeburtstag" className="col-sm-2 col-form-label">
                Geburtstag:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte Geburtstag angeben."
                  id="inputGeburtstag3"
                />
              </div>
            </div>
            {/* Wohnort */}
            <div className="row mb-3 col-md-6">
              <label for="inputOrt" className="col-sm-2 col-form-label">
                Wohnort:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte einen Wohnort angeben."
                  id="inputOrt3"
                />
              </div>
            </div>

            {/* BildUrl */}
            <div className="row mb-3 col-md-6">
              <label for="inputBildUrl" className="col-sm-2 col-form-label">
                Bild:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitte nur eine Url eingeben."
                  id="inputBildUrl3"
                />
              </div>
            </div>
            {/* Tierart */}
            <div className="row mb-3 col-md-6">
              <label for="inputTierart" className="col-sm-2 col-form-label">
                Tierart:
              </label>
              <select id="inputTierart" className="form-select">
                <option value="hund" selected>
                  Hund
                </option>
                <option value="katze">Katze</option>
                <option value="nagetier">Nagetier</option>
                <option value="notfall">Notfall</option>
                <option value="glücklich">Vergeben</option>
              </select>
            </div>
            {/* Beschreibung */}
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Beschreibung hinzufürgen
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            {/* Sende Button */}
            <button type="submit" className="btn btn-primary">
              Senden
            </button>
          </form>
        </form>
      ) : (
        <form onSubmit={handleLogIn}>
          <input type="password" placeholder="Bitte Passwort eingeben."></input>
          <button type="submit">Anmelden</button>
        </form>
      )}
    </div>
  );
};

export default Admin;
