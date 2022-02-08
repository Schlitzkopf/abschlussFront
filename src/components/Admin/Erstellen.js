import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Erstellen = () => {
  const [status, setStatus] = useState();
  const [setError] = useState();
  const navigate = useNavigate();

  const newAnimal = async (e) => {
    e.preventDefault();
    const {
      target: {
        elements: {
          inputName: { value: inputName },
          inputRasse: { value: inputRasse },
          inputGewicht: { value: inputGewicht },
          inputGeschlecht: { value: inputGeschlecht },
          inputGechipt: { value: inputGechipt },
          inputGeimpft: { value: inputGeimpft },
          inputKastriert: { value: inputKastriert },
          inputKinderfreundlich: { value: inputKinderfreundlich },
          inputVerträglich: { value: inputVerträglich },
          inputGeburtstag: { value: inputGeburtstag },
          inputOrt: { value: inputOrt },
          inputBildUrl: { value: inputBildUrl },
          inputTier: { value: inputTier },
          inputBeschreibung: { value: inputBeschreibung },
        },
      },
    } = e;
    await fetch("https://saveitnow.herokuapp.com/Animal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputName,
        inputRasse,
        inputGewicht,
        inputGeschlecht,
        inputGechipt,
        inputGeimpft,
        inputKastriert,
        inputKinderfreundlich,
        inputVerträglich,
        inputGeburtstag,
        inputOrt,
        inputBildUrl,
        inputTier,
        inputBeschreibung,
      }),
    })
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => setError(err.message));
    e.target[0].value = "";
  };
  console.log(status);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      {status === "Success" ? (
        <div className="adminText">
          <div className="container ">
            <button onClick={handleClick} className="btn btn-secondary">
              Zurück
            </button>
            <h1 className="text-center text-light adminPadding">
              Dein Tier wurde erfolgreich hochgeladen.
            </h1>
          </div>
        </div>
      ) : (
        <div className="adminText adminPadding">
          <div className="container adminPadding">
            <form onSubmit={newAnimal} className="needs-validation">
              <button onClick={handleClick} className="btn btn-secondary">
                Zurück
              </button>
              {/* Name */}
              <div className="row mb-3 col-md-6">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bitte den Name eingeben"
                    name="inputName"
                    required
                  />
                </div>
              </div>
              {/* Rasse */}
              <div className="row mb-3 col-md-6">
                <label htmlFor="inputRasse" className="col-sm-2 col-form-label">
                  Rasse:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bitte Rasse angeben."
                    name="inputRasse"
                    required
                  />
                </div>
              </div>
              {/* Gewicht */}
              <div className="row mb-3 col-md-6">
                <label
                  htmlFor="inputGewicht"
                  className="col-sm-2 col-form-label"
                >
                  Gewicht:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bitte Gewicht angeben."
                    name="inputGewicht"
                    required
                  />
                </div>
              </div>
              {/* Geschlecht */}
              <fieldset className="row mb-3 col-md-6">
                <legend className="col-form-label col-sm-2 pt-0">
                  Geschlecht?
                </legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGeschlecht"
                      value="Männlich"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Männlich
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGeschlecht"
                      value="Weiblich"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Weiblich
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Gechipt */}
              <fieldset className="row mb-3 col-md-6">
                <legend className="col-form-label col-sm-2 pt-0">
                  Gechipt?
                </legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGechipt"
                      value="Ja"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGechipt"
                      value="Nein"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Nein
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Geimpft */}
              <fieldset className="row mb-3 col-md-6">
                <legend className="col-form-label col-sm-2 pt-0">
                  Geimpft?
                </legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGeimpft"
                      value="Ja"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputGeimpft"
                      value="Nein"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Nein
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Kastriert */}
              <fieldset className="row mb-3 col-md-6">
                <legend className="col-form-label col-sm-2 pt-0">
                  Kastriert?
                </legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputKastriert"
                      value="Ja"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputKastriert"
                      value="Nein"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
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
                      name="inputKinderfreundlich"
                      value="Ja"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputKinderfreundlich"
                      value="Nein"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
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
                      name="inputVerträglich"
                      value="Ja"
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Ja
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inputVerträglich"
                      value="Nein"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Nein
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Geburtstag */}
              <div className="row mb-3 col-md-6">
                <label
                  htmlFor="inputGeburtstag"
                  className="col-sm-2 col-form-label"
                >
                  Geburtstag:
                </label>
                <div className="col-sm-10">
                  <input
                    type="attribute"
                    className="form-control"
                    placeholder="Bitte Geburtstag angeben."
                    name="inputGeburtstag"
                    required
                  />
                </div>
              </div>
              {/* Wohnort */}
              <div className="row mb-3 col-md-6">
                <label htmlFor="inputOrt" className="col-sm-2 col-form-label">
                  Wohnort:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bitte einen Wohnort angeben."
                    name="inputOrt"
                    required
                  />
                </div>
              </div>

              {/* BildUrl */}
              <div className="row mb-3 col-md-6">
                <label
                  htmlFor="inputBildUrl"
                  className="col-sm-2 col-form-label"
                >
                  Bild:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bitte nur eine Url eingeben."
                    name="inputBildUrl"
                  />
                </div>
              </div>
              {/* Tierart */}
              <div className="row mb-3 col-md-6">
                <label htmlFor="inputTier" className="col-sm-2 col-form-label">
                  Tierart:
                </label>
                <select name="inputTier" className="form-select" required>
                  <option value="hund">Hund</option>
                  <option value="katze">Katze</option>
                  <option value="nagetier">Nagetier</option>
                  <option value="notfall">Notfall</option>
                  <option value="glücklich">Vergeben</option>
                </select>
              </div>
              {/* Beschreibung */}
              <div className="mb-3">
                <label htmlFor="inputBeschreibung" className="form-label">
                  Beschreibung hinzufürgen
                </label>
                <textarea
                  className="form-control"
                  name="inputBeschreibung"
                  rows="3"
                  required
                ></textarea>
              </div>
              {/* Sende Button */}
              <button type="submit" className="btn btn-primary">
                Senden
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Erstellen;
