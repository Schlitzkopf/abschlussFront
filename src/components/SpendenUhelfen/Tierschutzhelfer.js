import React from "react";
import { Link } from "react-router-dom";

const Tierschutzhelfer = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Tierschutzhelfer rein</h1>
    </div>
  );
};

export default Tierschutzhelfer;
