import React from 'react';
import { Link } from 'react-router-dom';

const Hunde = ({animal}) => {
  return <div>
      <div>
      {animal.animal.map((animal, index) => (        
          <div key={index}>    
          {console.log(animal)}
<div className="card">
  <img className="card-img-top" src={animal.bildUrl} alt="Leider ist kein Bild vorhanden" />
<div className="card-body">
    <h5 className="card-title">{animal.name}</h5>
    <ul>
    <li className="card-text">Geboren: {animal.birth}</li>
    <li>Rasse: {animal.rasse}</li>
    <li>Wohnt momenten in {animal.ort}</li>
    </ul>
    <Link to={`/Hunde/${animal._id}`} className="btn btn-primary">Mehr Info</Link>
  </div>
</div>
                
            </div>       
        ))} 
        </div>
  </div>;
};

export default Hunde;
