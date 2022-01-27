import React from 'react';
import { useParams } from 'react-router-dom';

const HundeID = ({animal}) => {
    const { id } = useParams();
    console.log(animal)
    // const dog = animal && animal.find((element) => element.id === parseInt(id, 10))
  return(
    <>
    {/* {dog ? ( 
    
    <div className='HundeID'>
        <h2>{dog.name}</h2>
        <p>ID: {animal.id} </p>
        
 
    </div>):
    <div>
        <h2>Daten werden verarbeitet...</h2>
        <img src='https://media3.giphy.com/media/Oc8lIQHZsXqDu/200w.gif' />
    </div>} */}
    </>
)
};

export default HundeID;
