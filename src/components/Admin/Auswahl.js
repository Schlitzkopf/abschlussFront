import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Auswahl = () => {
  const { id } = useParams();
  const [beadel, setBeadel] = useState();
  const [update, setUpdate] = useState();
  const [del, setDel] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://saveitnow.herokuapp.com/animal/${id}`)
      .then((res) => setBeadel(res.data))
      .catch((err) => setError(err));
  }, [id]);
    console.log(update)
    console.log(error)
  const bearbeiten = async (e) => {
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
    await fetch(`https://saveitnow.herokuapp.com/animal/${id}`, {
      method: "PUT",
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
      .then((data) => setUpdate(data))
      .catch((err) => setError(err.message));
    e.target[0].value = "";
  };

  const löschen = async (e) => {
    e.preventDefault();
    await fetch(`https://saveitnow.herokuapp.com/animal/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDel(data))
      .catch((err) => setError(err.message));
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      {beadel ? (
        <div className="tierBack">
          <button onClick={handleClick} className="btn btn-secondary">
            Zurück
          </button>
          {del ? (
            <div className="text-light adminPadding">
              <h2>Tier wurder erfolgreich Gelöscht!</h2>
              <p>{error}</p>
            </div>
          ) : (
            <form onSubmit={löschen} className="text-center downPadding">
              <button className="btn btn-danger">Tier Löschen</button>
            </form>
          )}
          <form onSubmit={bearbeiten} className="needs-validation">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 mb-2">
                  <div className="card text-center h-100">
                    <img
                      className="card-img-top"
                      src={beadel.inputBildUrl}
                      onError={(img) =>
                        (img.src =
                          "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
                      }
                      alt=""
                    />
                    <div className="card-body cardTextBack">
                      <p className="card-text">Name: {beadel.inputName}</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={beadel.inputName}
                        name="inputName"
                        required
                      />
                      <p className="card-text">Rasse: {beadel.inputRasse}</p>
                      <p className="card-text">
                        Gewicht: {beadel.inputGewicht}
                      </p>
                      <p className="card-text">
                        Geschlecht: {beadel.inputGeschlecht}
                      </p>
                      <p className="card-text">
                        Gechipt: {beadel.inputGechipt}
                      </p>
                      <p className="card-text">
                        Geimpft: {beadel.inputGeimpft}
                      </p>
                      <p className="card-text">
                        Kastriert: {beadel.inputKastriert}
                      </p>
                      <p className="card-text">
                        Kinderfreundlich: {beadel.inputKinderfreundlich}
                      </p>
                      <p className="card-text">
                        Geboren: {beadel.inputGeburtstag}
                      </p>
                      <p className="card-text">Ort: {beadel.inputOrt}</p>
                      <p className="card-text">
                        BildUrl: {beadel.inputBildUrl}
                      </p>
                      <p className="card-text">Tierart: {beadel.inputTier}</p>
                      <p className="card-text">
                        Ort: {beadel.inputBeschreibung}
                      </p>
                      <p className="card-text">
                        Verhalten: {beadel.inputVerhalten}
                      </p>
                      <p className="card-text">
                        VideoUrl: {beadel.inputVideoUrl}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="text-center text-light">
            <h2>Daten werden verarbeitet...</h2>
            <img
              src="https://media3.giphy.com/media/Oc8lIQHZsXqDu/200w.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Auswahl;
