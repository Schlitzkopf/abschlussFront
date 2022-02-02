import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TiereID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [species, setSpecies] = useState();

  useEffect( () => {
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
              src={species.inputBildUrl}
              onError={(event) =>
                (event.target.src =
                  "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
              }
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{species.inputName}</h5>
              <p className="card-text">
                Hallo ich bin {species.inputName}. {species.inputBeschreibung} Ich bin{" "}
                {species.inputGeburtstag} geboren.
              </p>
              <p className="card-text">Meine Rasse: {species.inputRasse}</p>
              <p className="card-text">Ich wohne momentan in {species.inputOrt}</p>
              <p className="card-text">Gechipt: {species.inputGechipt}</p>
              <p className="card-text">Geimpft: {species.inputGeimpft}</p>
              <p className="card-text">Ich bin {species.inputGeschlecht}</p>
              <p className="card-text">Ich wiege {species.inputGewicht} Kg</p>
              <p className="card-text">
                Kann ich mit anderen Tieren gehalten werden ={">"}{" "}
                {species.inputVertraeglichkeit}
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
