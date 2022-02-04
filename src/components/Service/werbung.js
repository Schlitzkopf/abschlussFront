import React from "react";
import { Link } from "react-router-dom";

const Werbung = () => {
  return (
    <div>
      {" "}
      <Link to={"/"} className="btn btn-secondary">
        Zurück
      </Link>
      <h1>Hier könnte Ihre Werbung stehen!</h1>
    </div>
  );
};

export default Werbung;
