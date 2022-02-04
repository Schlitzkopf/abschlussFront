import React from "react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Impressum rein</h1>
    </div>
  );
};

export default Impressum;
