import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TiereID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [species, setSpecies] = useState();

  useEffect(async () => {
    await axios
      .get(`https://saveitnow.herokuapp.com/Animal/${id}`)
      .then((res) => setSpecies(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container">
        <button onClick={handleClick} className="btn btn-secondary">
          Zurück
        </button>
      </div>
      {species ? (
        <div className="container">
          <div className="card text-center">
            <img
              className="card-img-top"
              src={species.bildUrl}
              onError={(event) =>
                (event.target.src =
                  "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
              }
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{species.name}</h5>
              <p className="card-text">
                Hallo ich bin {species.name}. {species.beschreibung} Ich bin{" "}
                {species.birth} geboren.
              </p>
              <p className="card-text">Meine Rasse: {species.rasse}</p>
              <p className="card-text">Ich wohne momentan in {species.ort}</p>
              <p className="card-text">Gechipt: {species.gechipt}</p>
              <p className="card-text">Geimpft: {species.geimpft}</p>
              <p className="card-text">Ich bin {species.geschlecht}</p>
              <p className="card-text">Ich wiege {species.gewicht} Kg</p>
              <p className="card-text">
                Kann ich mit anderen Tieren gehalten werden ={">"}{" "}
                {species.vertraeglichkeit}
              </p>
              <p>{console.log(species)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center">
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

export default TiereID;
