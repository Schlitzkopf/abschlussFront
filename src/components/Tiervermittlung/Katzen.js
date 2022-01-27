import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Katzen = ({animal}) => {
  function ImgError(source){
    source.onError = "https://hundzugast.de/wp-content/themes/petsitter/images/job-placeholder.gif";
  }
  return <div>
    <div>
      {animal.animal.map((animal, index) => (        
    <div className='contain' key={index}> 
      <div className="card" >
        <img className="card-img-top" src={animal.bildUrl} onError={ImgError} alt=""/>
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
    <Footer />
  </div>;
};

export default Katzen;
