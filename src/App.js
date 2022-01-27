import React from 'react';
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Home from './components/Home.js';
import Ups from './components/Ups';
import Hunde from './components/Tiervermittlung/Hunde.js';
import HundeID from './components/Tiervermittlung/HundeID';
import Katzen from './components/Tiervermittlung/Katzen';
import Nagetiere from './components/Tiervermittlung/Nagetiere';
import Notfellchen from './components/Tiervermittlung/Notfellchen';
import Glückskinder from './components/Tiervermittlung/Glückskinder';

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
          <Route path="/hunde/:id" element={<HundeID animal={animal} />} />
          <Route path="/katzen" element={<Katzen animal={animal} />} />
          <Route path="/nagetiere" element={<Nagetiere animal={animal} />} />
          <Route path="/notfellchen" element={<Notfellchen animal={animal} />} />
          <Route path="/glueckskinder" element={<Glückskinder animal={animal} />} />
          <Route path="/ups" element={<Ups />} />
      </Routes>
   </div>) : ("Loading...")}
   </>
  );
}

export default App;
