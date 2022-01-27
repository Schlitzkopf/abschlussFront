import React from 'react';
import { Link } from 'react-router-dom';

const Hunde = ({animal}) => {
    console.log(animal.animal)
  return <div>
      <div>
      {animal.animal.map((animal, index) => (        
            <div key={index}>    
<div className="card">
  <img className="card-img-top" src="${animal._id}" alt="Card image cap" />
  <div className="card-body">
      {console.log(animal._id)}
    <h5 className="card-title">{animal.name}</h5>
    <p className="card-text">{animal.birth}</p>
    <Link to={`/Hunde/${animal._id}`} className="btn btn-primary">Mehr Info</Link>
  </div>
</div>
                
            </div>       
        ))} 
        </div>
  </div>;
};

export default Hunde;
