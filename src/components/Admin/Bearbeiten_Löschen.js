import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Bearbeiten = () => {
  const [all, setAll] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://saveitnow.herokuapp.com/Animal")
      .then((res) => setAll(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <button onClick={handleClick} className="btn btn-secondary mt-4 ">
        Zurück
      </button>
      <div className="text-center text-dark mb-5 mt-5 ueberschriften">
        <h2>Welches Tier möchtetst du berabeiten?</h2>
      </div>
      {all ? (
        <div className="">
          <div className="row">
            {all.animal.map((animal, index) => (
              <div key={index} className="col-sm-4 mb-2">
                <div className="card text-center h-100">
                  <img
                    className="card-img-top"
                    src={animal.inputBildUrl}
                    onError={(img) =>
                      (img.src =
                        "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
                    }
                    alt=""
                  />
                  <div className="card-body cardTextBack">
                    <h5 className="card-text">{animal.inputName}</h5>
                    <p className="card-text">Rasse: {animal.inputRasse}</p>
                    <p className="card-text">
                      Gewicht: {animal.inputGewicht} Kg
                    </p>
                    <p className="card-text">
                      Geschlecht: {animal.inputGeschlecht}
                    </p>
                    <Link
                      to={`/auswahl/${animal._id}`}
                      className="btn btn-primary"
                    >
                      Bearbeiten
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Bearbeiten;
