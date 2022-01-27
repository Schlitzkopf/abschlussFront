import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';


const Hunde = ({animal}) => {
  return <div>
    <Navigation />
    <div>
      {animal.animal.map((animal, index) => (        
    <div className='contain' key={index}> 
    <video className='fullscreen' src='puppy.mp4'></video> 
      <div className="card" >
        <img className="card-img-top" src={animal.bildUrl} alt="Leider ist noch kein Foto da" />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">Geboren: {animal.birth}</p>
        <p className="card-text">Rasse: {animal.rasse}</p>
        <p className="card-text">Ich wohne in {animal.ort}</p>
        <Link to={`/tiere/${animal._id}`} className="btn btn-primary">Mehr Info</Link>
    </div>
  </div>
</div>       
        ))} 
    </div>
  </div>;
};

export default Hunde;

{/*  */}