import React from "react";
import { Link } from "react-router-dom";

const Hundesteuer = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommt die Hundesteuer-Info rein.</h1>
    </div>
  );
};

export default Hundesteuer;
