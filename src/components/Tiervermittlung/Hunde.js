import React from 'react';
import { Link } from 'react-router-dom';

const Hunde = ({animal}) => {
  return <div>
      <div>
      {animal.animal.map((animal, index) => (        
          <div key={index}>  
          <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={animal.bildUrl} alt="Leider ist kein Bild vorhanden" />
    <div class="card-body">
      <h5 class="card-title">{animal.name}</h5>
      <ul class="card-text">
    <li className="card-text">Geboren: {animal.birth}</li>
    <li>Rasse: {animal.rasse}</li>
    <li>Wohnt momenten in {animal.ort}</li>
    </ul>
    </div>
    <div class="card-footer">
    <Link to={`/Hunde/${animal._id}`} className="btn btn-primary">Mehr Info</Link>
    </div>
  </div>
</div>  
          {console.log(animal)}            
            </div>       
        ))} 
        </div>
  </div>;
};

export default Hunde;
