import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container d-flex">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Tiervermittlung
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"hunde"}>
              Hunde
            </Link></li>
            <li><Link className="dropdown-item" to={"katzen"}>
              Katzen
            </Link></li>
            <li><Link className="dropdown-item" to={"nagetiere"}>
              Nagetiere
            </Link></li>
            <li><Link className="dropdown-item" to={"notfellchen"}>
              Notfellchen
            </Link></li>
            <li>         <Link className="dropdown-item" to={"glueckskinder"}>
              Glückskinder
            </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Spenden & Helfen
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"pflegestellen"}>
              Pflegestellen
            </Link></li>
            <li>    <Link className="dropdown-item" to={"flugpaten"}>
              Flugpaten
            </Link></li>
            <li><Link className="dropdown-item" to={"tiersitter"}>
              Tiersitter
            </Link></li>
            <li><Link className="dropdown-item" to={"tierschutzhelfer"}>
              Tierschutzhelfer
            </Link></li>
            <li><Link className="dropdown-item" to={"suchmeldungen"}>
              Suchmeldungen
            </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"RSS"}>
              RSS-Feed
            </Link></li>
            <li><Link className="dropdown-item" to={"datenschutz"}>
              Datenschutz
            </Link></li>
            <li><Link className="dropdown-item" to={"content"}>
              Content
            </Link></li>
            <li><Link className="dropdown-item" to={"werbung"}>
              Werbung
            </Link></li>
            <li><Link className="dropdown-item" to={"impressum"}>
              Impressum
            </Link></li>
            <li><Link className="dropdown-item" to={"kontakt"}>
              Kontakt
            </Link></li>
            <li><Link className="dropdown-item" to={"cookies"}>
              Cookies
            </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Ratgeber
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"buecher"}>
              Bücher
            </Link></li>
            <li><Link className="dropdown-item" to={"hundesteuer"}>
              Hundesteuer
            </Link></li>
            <li><Link className="dropdown-item" to={"rechtsanwaelte"}>
              Rechtsanwälte
            </Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"admin"}>Admin</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>   
     
      </div>
    </>
  );
};

export default Navigation;
