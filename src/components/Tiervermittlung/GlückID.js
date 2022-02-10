import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const GlückID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [species, setSpecies] = useState();

  useEffect(() => {
    axios
      .get(`https://saveitnow.herokuapp.com/Animal/${id}`)
      .then((res) => setSpecies(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mt-5"></div>
      {species ? (
        <div className="container mb-5">
          <div className="card  mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img rounded-start"
                  src={species.inputBildUrl}
                  onError={(event) =>
                    (event.target.src =
                      "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
                  }
                  alt="Bild des Tieres"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body cardTextBack">
                  <h5 className="card-title text-own">{species.inputName}</h5>
                  <p className="card-text text-own">
                    Hallo ich bin {species.inputName}. Ich bin{" "}
                    {species.inputGeburtstag} geboren.
                  </p>
                  <p className="card-text text-own">
                    Meine Beschreibung: {species.inputBeschreibung}
                  </p>
                  <p className="card-text text-own">Meine Rasse: {species.inputRasse}</p>
                  <p className="card-text text-own">
                    Ich wohne momentan in {species.inputOrt}
                  </p>
                  <p className="card-text text-own">Gechipt: {species.inputGechipt}</p>
                  <p className="card-text text-own">Geimpft: {species.inputGeimpft}</p>
                  <p className="card-text text-own">Ich bin {species.inputGeschlecht}</p>
                  <p className="card-text text-own">
                    Ich wiege {species.inputGewicht} Kg
                  </p>
                  <p className="card-text text-own">
                    Kann ich gut mit Kindern? {species.inputKinderfreundlich}!
                  </p>
                  <button onClick={handleClick} className="btn btn-secondary marginButton">
                    Zurück
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center text-dark">
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

export default GlückID;
