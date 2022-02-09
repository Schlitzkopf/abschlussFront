import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Auswahl = () => {
  const { id } = useParams();
  const [all, getAll] = useState();
  const [del, setDel] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://saveitnow.herokuapp.com/animal/${id}`)
      .then((res) => getAll(res.data))
      .catch((err) => setError(err));
  }, [id]);

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
    <div className="container mb-5 mt-5">
      {all ? (
        <div className="container mb-5 mt-5">
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
          <div className="container">
            <div className="row">
              <div className="col-sm-4 mb-2">
                <div className="card text-center h-100">
                  <img
                    className="card-img-top"
                    src={all.inputBildUrl}
                    onError={(img) =>
                      (img.src =
                        "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
                    }
                    alt=""
                  />
                  <div className="card-body cardTextBack">
                    <p className="card-text">Name: {all.inputName}</p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={all.inputName}
                      name="inputName"
                      required
                    />
                    <p className="card-text">Rasse: {all.inputRasse}</p>
                    <p className="card-text">Gewicht: {all.inputGewicht}</p>
                    <p className="card-text">
                      Geschlecht: {all.inputGeschlecht}
                    </p>
                    <p className="card-text">Gechipt: {all.inputGechipt}</p>
                    <p className="card-text">Geimpft: {all.inputGeimpft}</p>
                    <p className="card-text">Kastriert: {all.inputKastriert}</p>
                    <p className="card-text">
                      Kinderfreundlich: {all.inputKinderfreundlich}
                    </p>
                    <p className="card-text">Geboren: {all.inputGeburtstag}</p>
                    <p className="card-text">Ort: {all.inputOrt}</p>
                    <p className="card-text">BildUrl: {all.inputBildUrl}</p>
                    <p className="card-text">Tierart: {all.inputTier}</p>
                    <p className="card-text">Ort: {all.inputBeschreibung}</p>
                    <p className="card-text">Verhalten: {all.inputVerhalten}</p>
                    <p className="card-text">VideoUrl: {all.inputVideoUrl}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Auswahl;
