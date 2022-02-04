import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Footer";

const Auswahl = () => {
  const { id } = useParams();
  const [beadel, setBeadel] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://saveitnow.herokuapp.com/beadel/${id}`)
      .then((res) => setBeadel(res.data))
      .catch((err) => setError(err));
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      {error ? (
        <>
          <p>{error}</p>
        </>
      ) : (
        <div className="tierBack">
          <button onClick={handleClick} className="btn btn-secondary">
            Zurück
          </button>
          {beadel ? (
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
                      <Link to={""} className="btn btn-primary">
                        Mehr Info
                      </Link>
                    </div>
                  </div>
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default Auswahl;
