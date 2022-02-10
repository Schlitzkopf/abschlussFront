import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Glückskinder = (animal) => {
  const [lucky, setLucky] = useState();

  useEffect(() => {
    axios
      .get("https://saveitnow.herokuapp.com/Animal/lucky")
      .then((res) => setLucky(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    {lucky ? (
      <div className="container">
        <div className="row">
          <h1 className="text-center text-dark mt-5 mb-5 ueberschriften">GESCHAFFT - ZUHAUSE GEFUNDEN!</h1>
          {lucky.animal.map((animal, index) => (
            <div key={index} className="col-sm-4 mb-5 mt-5">
              <div className="cardAll card text-center h-100">
                <img
                  className="card-img-top "
                  src={animal.inputBildUrl}
                  onError={(img) =>
                    (img.src =
                      "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif")
                  }
                  alt=""
                />
                <div className="card-body cardTextBack">
                  <h5 className="card-title text-own">{animal.inputName}</h5>
                  <p className="card-text text-own">
                    Geboren: {animal.inputGeburtstag}
                  </p>
                  <p className="card-text text-own">Rasse: {animal.inputRasse}</p>
                  <p className="card-text text-own">Ich wohne in {animal.inputOrt}</p>
                  <Link
                    to={`/glueck/${animal._id}`}
                    className="btn btn-light"
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


export default Glückskinder;
