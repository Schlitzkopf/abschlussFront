import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Ups from "./components/Ups";
import Hunde from "./components/Tiervermittlung/Hunde.js";
import SpeciesID from "./components/Tiervermittlung/SpeciesID";
import Katzen from "./components/Tiervermittlung/Katzen";
import Nagetiere from "./components/Tiervermittlung/Nagetiere";
import Notfellchen from "./components/Tiervermittlung/Notfellchen";
import Glückskinder from "./components/Tiervermittlung/Glückskinder";
import Pflegestellen from "./components/SpendenUhelfen/Pflegestellen";
import Tiersitter from "./components/SpendenUhelfen/Tiersitter";
import Flugpaten from "./components/SpendenUhelfen/Flugpaten";
import Content from "./components/Service/Content";
import Datenschutz from "./components/Service/Datenschutz";
import RSS from "./components/Service/RSS";
import Tierschutzhelfer from "./components/SpendenUhelfen/Tierschutzhelfer";
import Suchmeldungen from "./components/SpendenUhelfen/Suchmeldungen";
import Werbung from "./components/Service/werbung";
import Impressum from "./components/Service/Impressum";
import Kontakt from "./components/Service/Kontakt";
import Cookies from "./components/Service/Cookies";
import Bücher from "./components/Ratgeber/Bücher";
import Hundesteuer from "./components/Ratgeber/Hundesteuer";
import Rechtsanwälte from "./components/Ratgeber/Rechtsanwälte";
import Admin from "./Admin";

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunde" element={<Hunde />} />
        <Route path="/tiere/:id" element={<SpeciesID />} />
        <Route path="/katzen" element={<Katzen />} />
        <Route path="/nagetiere" element={<Nagetiere />} />
        <Route path="/notfellchen" element={<Notfellchen />} />
        <Route path="/glueckskinder" element={<Glückskinder />} />
        <Route path="/pflegestellen" element={<Pflegestellen />} />
        <Route path="/flugpaten" element={<Flugpaten />} />
        <Route path="/tiersitter" element={<Tiersitter />} />
        <Route path="/tierschutzhelfer" element={<Tierschutzhelfer />} />
        <Route path="/suchmeldungen" element={<Suchmeldungen />} />
        <Route path="/rss" element={<RSS />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/content" element={<Content />} />
        <Route path="/werbung" element={<Werbung />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/buecher" element={<Bücher />} />
        <Route path="/hundesteuer" element={<Hundesteuer />} />
        <Route path="/rechtsanwaelte" element={<Rechtsanwälte />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/ups" element={<Ups />} />
      </Routes>
    </>
  );
}

export default App;
