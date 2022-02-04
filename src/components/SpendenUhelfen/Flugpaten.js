import React from "react";
import { Link } from "react-router-dom";

const Flugpaten = () => {
  return (
    <div>
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1> Hier kommen Flugpaten rein </h1>
    </div>
  );
};

export default Flugpaten;
