import React from "react";
import { Link } from "react-router-dom";

const Pflegestellen = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier kommen Pflegestellen rein</h1>
    </div>
  );
};

export default Pflegestellen;
