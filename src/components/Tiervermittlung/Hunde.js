import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer';


const Hunde = () => {
  const [dogs, setDogs] = useState();

  useEffect( () => {
     axios.get ("https://saveitnow.herokuapp.com/Animal/dogs")
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }, []);

 
  return <div>
      <Link to={'/'} className="btn btn-primary">Back</Link>
     {dogs ? (<div>
      {dogs.animal.map((animal, index) => (        
    <div className='contain' key={index}> 
      <div className="card" >
        <img className="card-img-top" src={animal.bildUrl} onError={(event)=>event.target.src="https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif"} alt='' />
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
    </div>) :     <div>
      <div className="noData">
    <h2>Daten werden verarbeitet...</h2>
    <img src='https://media3.giphy.com/media/Oc8lIQHZsXqDu/200w.gif' alt=""/>
    </div>
</div>}
    <Footer />
  </div>;
};

export default Hunde;

