import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HundeID = ({animal}) => {
    const { id } = useParams();
    const [dog, setDog] = useState();
    console.log(animal.animal)
    useEffect(() => {
      setDog (animal.animal.find(dog => dog._id == id))
      }
    ,[]);
    
  return(
    <>
    {dog ? ( 
    
    <div className='HundeID'>
        <h2>{dog.name}</h2>
        <p>Geboren: {dog.birth} </p>
        <p></p>
        
 
    </div>):
    <div>
        <h2>Daten werden verarbeitet...</h2>
        <img src='https://media3.giphy.com/media/Oc8lIQHZsXqDu/200w.gif' />
    </div>}
    </>
)
};

export default HundeID;
