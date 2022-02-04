import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const Glückskinder = (animal) => {
  const [lucky, setLucky] = useState();

  useEffect(() => {
    axios
      .get("https://saveitnow.herokuapp.com/Animal/lucky")
      .then((res) => setLucky(res.data))
      .catch((err) => console.log(err));
  }, []);
  function ImgError(source) {
    source.onError =
      "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif";
  }
  return (
    <div className="tierBack">
      <Link to={"/"} className="btn btn-primary">
        Back
      </Link>
      {lucky ? (
        <div  className="container">
          {lucky.animal.map((animal, index) => (
            <div className="contain" key={index}>
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={animal.inputBildUrl}
                  onError={ImgError}
                  alt=""
                />
                <div className="card-body  cardTextBack">
                  <h5 className="card-title">{animal.inputName}</h5>
                  <p className="card-text">Geboren: {animal.inputGeburtstag}</p>
                  <p className="card-text">Rasse: {animal.inputRasse}</p>
                  <p className="card-text">Ich wohne in {animal.inputOrt}</p>
                  <Link to={`/tiere/${animal._id}`} className="btn btn-primary">
                    Mehr Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
      <Footer />
    </div>
  );
};

export default Glückskinder;
