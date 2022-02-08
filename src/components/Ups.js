import React from "react";
import { Link } from "react-router-dom";

const Ups = () => {
  return (
    <div className="text-center">
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h2 className="text-light">Sry wir arbeiten gerade an diesem Link.</h2>
      <img
        className="img-fluid"
        src="https://acegif.com/wp-content/uploads/cat-typing-16.gif"
        alt=""
      />
    </div>
  );
};

export default Ups;
