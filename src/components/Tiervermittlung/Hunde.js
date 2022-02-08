import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const Hunde = () => {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    axios
      .get("https://saveitnow.herokuapp.com/Animal/dogs")
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tierBack">
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      {dogs ? (
        <div className="container">
          <div className="row">
            {dogs.animal.map((animal, index) => (
              <div key={index} className="col-sm-4 mb-2">
                <div className="cardAll card text-center h-100">
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
                    <h5 className="card-title">{animal.inputName}</h5>
                    <p className="card-text">
                      Geboren: {animal.inputGeburtstag}
                    </p>
                    <p className="card-text">Rasse: {animal.inputRasse}</p>
                    <p className="card-text">Ich wohne in {animal.inputOrt}</p>
                    <Link
                      to={`/tiere/${animal._id}`}
                      className="btn btn-primary"
                    >
                      Mehr Info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      <Footer />
    </div>
  );
};

export default Hunde;
