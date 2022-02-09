import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container sticky-top">
          <Link to="/"><img
            alt="Logo"
            className="img-responsive passendNav"
            src={require("./Logo/small.png")}
          /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  href="blank"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tiervermittlung
                </a>
                <ul
                  className="dropdown-menu navBack"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item navText" to="hunde">
                      Hunde
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to="katzen">
                      Katzen
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to="nagetiere">
                      Nagetiere
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item navText"
                      to={"glueckskinder"}
                    >
                      Glückskinder
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  id="navbarDropdown"
                  role="button"
                  href="blank"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Spenden & Helfen
                </a>
                <ul
                  className="dropdown-menu navBack"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item navText"
                      to={"suchmeldungen"}
                    >
                      Suchmeldungen
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item navText"
                      to={"tierschutzhelfer"}
                    >
                      Tierschutzhelfer
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  href="blank"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ratgeber
                </a>
                <ul
                  className="dropdown-menu navBack"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item navText" to={"ups"}>
                      Hundesteuer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"verarbeiten"}>
                      Datenverarbeitung
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
