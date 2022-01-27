import React from 'react';
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Home from './components/Home.js';
import Ups from './components/Ups';
import Hunde from './components/Tiervermittlung/Hunde.js';
import Katzen from './components/Tiervermittlung/Katzen';
import Nagetiere from './components/Tiervermittlung/Nagetiere';
import Notfellchen from './components/Tiervermittlung/Notfellchen';
import Glückskinder from './components/Tiervermittlung/Glückskinder';
import Pflegestellen from './components/SpendenUhelfen/Pflegestellen';
import Tiersitter from './components/SpendenUhelfen/Tiersitter';
import Flugpaten from './components/SpendenUhelfen/Flugpaten';
import Content from './components/Service/Content';
import Datenschutz from './components/Service/Datenschutz';
import RSS from './components/Service/RSS';
import Tierschutzhelfer from './components/SpendenUhelfen/Tierschutzhelfer';
import Suchmeldungen from './components/SpendenUhelfen/Suchmeldungen';
import Werbung from './components/Service/werbung';
import Impressum from './components/Service/Impressum';
import Kontakt from './components/Service/Kontakt';
import Cookies from './components/Service/Cookies';
import Bücher from './components/Ratgeber/Bücher';
import Hundesteuer from './components/Ratgeber/Hundesteuer';
import Rechtsanwälte from './components/Ratgeber/Rechtsanwälte';

function App(props) {
  const [animal, setAnimal] = useState();

  useEffect(() => {
    axios.get ("https://saveitnow.herokuapp.com/Animal")
      .then((res) => setAnimal(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
     <>
     {animal ? (<div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/hunde" element={<Hunde animal={animal} />} />
          <Route path="/katzen" element={<Katzen animal={animal} />} />
          <Route path="/nagetiere" element={<Nagetiere animal={animal} />} />
          <Route path="/notfellchen" element={<Notfellchen animal={animal} />} />
          <Route path="/glueckskinder" element={<Glückskinder animal={animal} />} />
          <Route path="/pflegestellen" element={<Pflegestellen animal={animal} />} />
            <Route path="/flugpaten" element={<Flugpaten animal={animal} />} />
          <Route path="/tiersitter" element={<Tiersitter animal={animal} />} />
           <Route path="/tierschutzhelfer" element={<Tierschutzhelfer animal={animal} />} />
            <Route path="/suchmeldungen" element={<Suchmeldungen animal={animal} />} />
          <Route path="/rss" element={<RSS animal={animal} />} />
          <Route path="/datenschutz" element={<Datenschutz animal={animal} />} />
          <Route path="/content" element={<Content animal={animal} />} />
           <Route path="/werbung" element={<Werbung animal={animal} />} />
 <Route path="/impressum" element={<Impressum animal={animal} />} />
<Route path="/kontakt" element={<Kontakt animal={animal} />} />
<Route path="/cookies" element={<Cookies animal={animal} />} />
<Route path="/buecher" element={<Bücher animal={animal} />} />
<Route path="/hundesteuer" element={<Hundesteuer animal={animal} />} />
<Route path="/rechtsanwaelte" element={<Rechtsanwälte animal={animal} />} />

          <Route path="/ups" element={<Ups />} />
         
      </Routes>
   </div>) : ("Loading...")}
   </>
  );
}

export default App;
