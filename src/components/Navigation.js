import React from 'react';
import {Link} from "react-router-dom"; 

const Navigation = () => {
  return <div>
       <div className='Flex'>
       
 <nav className="nav-item dropdown">

        <div className="nav-link dropdown-toggle, btn btn-outline-primary " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <div className="nav-link dropdown-toggle, btn btn-outline-primary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Spenden & Helfen
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"pflegestellen"}>Pflegestellen</Link>
          <Link className="dropdown-item" to={"flugpaten"}>Flugpaten</Link>
          <Link className="dropdown-item" to={"tiersitter"}>Tiersitter</Link>
          <Link className="dropdown-item" to={"tierschutzhelfer"}>Tierschutzhelfer</Link>
          <Link className="dropdown-item" to={"suchmeldungen"}>Suchmeldungen</Link>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle, btn btn-outline-primary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"RSS"}>RSS-Feed</Link>
          <Link className="dropdown-item" to={"datenschutz"}>Datenschutz</Link>
          <Link className="dropdown-item" to={"content"}>Content</Link>
          <Link className="dropdown-item" to={"werbung"}>Werbung</Link>
          <Link className="dropdown-item" to={"impressum"}>Impressum</Link>
          <Link className="dropdown-item" to={"kontakt"}>Kontakt</Link>
          <Link className="dropdown-item" to={"cookies"}>Cookies</Link>
        </div>
      </nav>
      <nav className="nav-item dropdown">
        <div className="nav-link dropdown-toggle,  btn btn-outline-primary " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ratgeber
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"buecher"}>Bücher</Link>
          <Link className="dropdown-item" to={"hundesteuer"}>Hundesteuer</Link>
          <Link className="dropdown-item" to={"rechtsanwaelte"}>Rechtsanwälte</Link>
        </div>
      </nav>
      </div>
  </div>;
};

export default Navigation;
