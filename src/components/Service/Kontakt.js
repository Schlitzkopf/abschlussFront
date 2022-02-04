import React from "react";
import { Link } from "react-router-dom";

const Kontakt = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Kontakt rein</h1>
    </div>
  );
};

export default Kontakt;
