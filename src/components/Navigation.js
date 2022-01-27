import React from 'react';
import {Link} from "react-router-dom"; 

const Navigation = () => {
  return <div>
       <div className='Flex'>
 <nav className="nav-item dropdown">
        <a className="nav-link dropdown-toggle, btn btn-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tiervermittlung
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"hunde"}>Hunde</Link>
          <Link className="dropdown-item" to={"katzen"}>Katzen</Link>
          <Link className="dropdown-item" to={"Nagetiere"}>Nagetiere</Link>
          <a className="dropdown-item" href="#">Notfellchen</a>
          <a className="dropdown-item" href="#">Glückskinder</a>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <a className="nav-link dropdown-toggle, btn btn-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Spenden & Helfen
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Pflegestellen</a>
          <a className="dropdown-item" href="#">Flugpaten</a>
          <a className="dropdown-item" href="#">Tiersitter</a>
          <a className="dropdown-item" href="#">Tierschutzhelfer</a>
          <a className="dropdown-item" href="#">Suchmeldung</a>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <a className="nav-link dropdown-toggle, btn btn-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">RSS-Feed</a>
          <a className="dropdown-item" href="#">Datenschutz</a>
          <a className="dropdown-item" href="#">Content</a>
          <a className="dropdown-item" href="#">Werbung</a>
          <a className="dropdown-item" href="#">Impressum</a>
          <a className="dropdown-item" href="#">Kontakt</a>
          <a className="dropdown-item" href="#">Cookies</a>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <a className="nav-link dropdown-toggle, btn btn-secondary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ratgeber
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Bücher</a>
          <a className="dropdown-item" href="#">Hundesteuer</a>
          <a className="dropdown-item" href="#">Rechtsanwälte</a>
        </div>
      </nav>
      </div>
  </div>;
};

export default Navigation;
