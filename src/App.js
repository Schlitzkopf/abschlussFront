import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
// import Footer from './components/footer';
// import Home from './components/home.js';

function App(props) {
  const [animal, setAnimal] = useState();

  useEffect(() => {
    axios.get ("https://saveitnow.herokuapp.com/Animal")
      .then((res) => setAnimal(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
     <>
    <div>Also fangen wir an!</div>
   </>
  );
}

export default App;
