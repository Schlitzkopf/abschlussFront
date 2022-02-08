import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Ups from "./components/Ups";
import Hunde from "./components/Tiervermittlung/Hunde.js";
import SpeciesID from "./components/Tiervermittlung/SpeciesID";
import Katzen from "./components/Tiervermittlung/Katzen";
import Nagetiere from "./components/Tiervermittlung/Nagetiere";
import Glückskinder from "./components/Tiervermittlung/Glückskinder";
import Tierschutzhelfer from "./components/SpendenUhelfen/Tierschutzhelfer";
import Suchmeldungen from "./components/SpendenUhelfen/Suchmeldungen";
import Hundesteuer from "./components/Ratgeber/Hundesteuer";
import Admin from "./Admin";
import Bearbeiten from "./components/Admin/Bearbeiten_Löschen";
import Erstellen from "./components/Admin/Erstellen";
import Auswahl from "./components/Admin/Auswahl";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GlückID from "./components/Tiervermittlung/GlückID";

function App(props) {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunde" element={<Hunde />} />
        <Route path="/tiere/:id" element={<SpeciesID />} />
        <Route path="/katzen" element={<Katzen />} />
        <Route path="/nagetiere" element={<Nagetiere />} />
        <Route path="/glueckskinder" element={<Glückskinder />} />
        <Route path="/tierschutzhelfer" element={<Tierschutzhelfer />} />
        <Route path="/suchmeldungen" element={<Suchmeldungen />} />
        <Route path="/hundesteuer" element={<Hundesteuer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/bearbeiten" element={<Bearbeiten />} />
        <Route path="/erstellen" element={<Erstellen />} />
        <Route path="/auswahl/:id" element={<Auswahl />} />
        <Route path="/glück/:id" element={<GlückID />} />
        <Route path="/ups" element={<Ups />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
