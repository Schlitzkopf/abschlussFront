import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container sticky-top">
          <img
            alt="Logo"
            className="img-responsive"
            src={require("./Logo/go.png")}
          />
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
                    <Link className="dropdown-item navText" to={"hunde"}>
                      Hunde
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"katzen"}>
                      Katzen
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"nagetiere"}>
                      Nagetiere
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"notfellchen"}>
                      Notfellchen
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
                      to={"pflegestellen"}
                    >
                      Pflegestellen
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"flugpaten"}>
                      Flugpaten
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"tiersitter"}>
                      Tiersitter
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
                  <li>
                    <Link
                      className="dropdown-item navText"
                      to={"suchmeldungen"}
                    >
                      Suchmeldungen
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
                  Service
                </a>
                <ul
                  className="dropdown-menu navBack"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item navText" to={"RSS"}>
                      RSS-Feed
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"datenschutz"}>
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"content"}>
                      Content
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"werbung"}>
                      Werbung
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"impressum"}>
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"kontakt"}>
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"cookies"}>
                      Cookies
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
                    <Link className="dropdown-item navText" to={"buecher"}>
                      Bücher
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item navText" to={"hundesteuer"}>
                      Hundesteuer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item navText"
                      to={"rechtsanwaelte"}
                    >
                      Rechtsanwälte
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"admin"}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
