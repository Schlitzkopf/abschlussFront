import React from 'react';
import {Link} from "react-router-dom"; 

const Navigation = () => {
  return <div>
       <div className='Flex'>
 <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle, btn btn-secondary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tiervermittlung
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"hunde"}>Hunde</Link>
          <Link className="dropdown-item" to={"katzen"}>Katzen</Link>
          <Link className="dropdown-item" to={"nagetiere"}>Nagetiere</Link>
          <Link className="dropdown-item" to={"notfellchen"}>Notfellchen</Link>
          <Link className="dropdown-item" to={"glueckskinder"}>Glückskinder</Link>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle, btn btn-secondary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Spenden & Helfen
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"ups"}>Pflegestellen</Link>
          <Link className="dropdown-item" to={"ups"}>Flugpaten</Link>
          <Link className="dropdown-item" to={"ups"}>Tiersitter</Link>
          <Link className="dropdown-item" to={"ups"}>Tierschutzhelfer</Link>
          <Link className="dropdown-item" to={"ups"}>Suchmeldung</Link>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle, btn btn-secondary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"ups"}>RSS-Feed</Link>
          <Link className="dropdown-item" to={"ups"}>Datenschutz</Link>
          <Link className="dropdown-item" to={"ups"}>Content</Link>
          <Link className="dropdown-item" to={"ups"}>Werbung</Link>
          <Link className="dropdown-item" to={"ups"}>Impressum</Link>
          <Link className="dropdown-item" to={"ups"}>Kontakt</Link>
          <Link className="dropdown-item" to={"ups"}>Cookies</Link>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle, btn btn-secondary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ratgeber
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"ups"}>Bücher</Link>
          <Link className="dropdown-item" to={"ups"}>Hundesteuer</Link>
          <Link className="dropdown-item" to={"ups"}>Rechtsanwälte</Link>
        </div>
      </nav>
      </div>
  </div>;
};

export default Navigation;
