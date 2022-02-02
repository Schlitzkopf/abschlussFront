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
            <div class="row mb-3 col-md-6">
              <label for="inputName" class="col-sm-2 col-form-label">
                Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte den Name eingeben"
                  id="inputName3"
                />
              </div>
            </div>
            {/* Rasse */}
            <div class="row mb-3 col-md-6">
              <label for="inputRasse" class="col-sm-2 col-form-label">
                Rasse:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte Rasse angeben."
                  id="inputRasse3"
                />
              </div>
            </div>
            {/* Gewicht */}
            <div class="row mb-3 col-md-6">
              <label for="inputGewicht" class="col-sm-2 col-form-label">
                Gewicht:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte Gewicht angeben."
                  id="inputGewicht3"
                />
              </div>
            </div>
            {/* Geschlecht */}
            <fieldset class="row mb-3 col-md-6">
              <legend class="col-form-label col-sm-2 pt-0">Geschlecht?</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Geschlecht"
                    id="gridRadio1"
                    value="Männlich"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Männlich
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Geschlecht"
                    id="gridRadios2"
                    value="Weiblich"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Weiblich
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Gechipt */}
            <fieldset class="row mb-3 col-md-6">
              <legend class="col-form-label col-sm-2 pt-0">Gechipt?</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Gechipt"
                    id="gridRadios3"
                    value="Ja"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Gechipt"
                    id="gridRadios4"
                    value="Nein"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Geimpft */}
            <fieldset class="row mb-3 col-md-6">
              <legend class="col-form-label col-sm-2 pt-0">Geimpft?</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Geimpft"
                    id="gridRadios5"
                    value="Ja"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Geimpft"
                    id="gridRadios6"
                    value="Nein"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Kastriert */}
            <fieldset class="row mb-3 col-md-6">
              <legend class="col-form-label col-sm-2 pt-0">Kastriert?</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Kastriert"
                    id="gridRadios7"
                    value="Ja"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Kastriert"
                    id="gridRadios8"
                    value="Nein"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Kinderfreundlich */}
            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">
                Ist das Tier Kinderfreundlich?
              </legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Kinderfreundlich"
                    id="gridRadios11"
                    value="Ja"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Kinderfreundlich"
                    id="gridRadios12"
                    value="Nein"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Verträglich mit andern Tieren */}
            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">
                Verträglich mit Anderen Tieren?
              </legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Verträglich"
                    id="gridRadios9"
                    value="Ja"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Ja
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Verträglich"
                    id="gridRadios10"
                    value="Nein"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
            {/* Geburtstag */}
            <div class="row mb-3 col-md-6">
              <label for="inputGeburtstag" class="col-sm-2 col-form-label">
                Geburtstag:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte Geburtstag angeben."
                  id="inputGeburtstag3"
                />
              </div>
            </div>
            {/* Wohnort */}
            <div class="row mb-3 col-md-6">
              <label for="inputOrt" class="col-sm-2 col-form-label">
                Wohnort:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte einen Wohnort angeben."
                  id="inputOrt3"
                />
              </div>
            </div>

            {/* BildUrl */}
            <div class="row mb-3 col-md-6">
              <label for="inputBildUrl" class="col-sm-2 col-form-label">
                Bild:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bitte nur eine Url eingeben."
                  id="inputBildUrl3"
                />
              </div>
            </div>
            {/* Tierart */}
            <div class="row mb-3 col-md-6">
              <label for="inputTierart" class="col-sm-2 col-form-label">
                Tierart:
              </label>
              <select id="inputTierart" class="form-select">
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
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Beschreibung hinzufürgen
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            {/* Sende Button */}
            <button type="submit" class="btn btn-primary">
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
