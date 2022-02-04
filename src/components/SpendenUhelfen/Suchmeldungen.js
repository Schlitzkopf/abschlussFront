import React from "react";
import { Link } from "react-router-dom";

const Suchmeldungen = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Suchmeldungen rein</h1>
    </div>
  );
};

export default Suchmeldungen;
