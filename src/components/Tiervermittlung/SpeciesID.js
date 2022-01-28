import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TiereID = () => {
    const { id } = useParams();
    const [species, setSpecies] = useState();

    useEffect (async() => {
       await axios.get (`https://saveitnow.herokuapp.com/Animal/${id}`)
        .then((res) => setSpecies(res.data))
        .catch((err) => console.log(err));
    }, []);



    function ImgError(source){
      source.onError = "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif";
    }
  return(
    <>
    {species ? ( 
    <div className='TierID'>
        <h2>{species.name}</h2>
        <img src={species.bildUrl} onError={ImgError} alt=""/>
        <p>{species.beschreibung}</p>
        <p>Geboren: {species.birth} </p>
        <p>Rasse: {species.rasse}</p>
        <p>Ich wohne in {species.ort}</p>
        <p>Kinderfreundlich: {species.kinderfreundlich}</p>
        <p>Mein verhalten ist {species.verhalten}</p>
        <p>Geimpft: {species.geimpft}</p>
        <p>Gechipt: {species.gechipt}</p>
        
 
    </div>):
    <div>
        <h2>Daten werden verarbeitet...</h2>
        <img src='https://media3.giphy.com/media/Oc8lIQHZsXqDu/200w.gif' />
    </div>}
    </>
)
};

export default TiereID;
