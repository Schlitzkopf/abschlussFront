import React from "react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Datenschutz rein</h1>
    </div>
  );
};

export default Datenschutz;
