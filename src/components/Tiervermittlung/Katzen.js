import React from 'react';
import Footer from '../Footer';

const Katzen = ({animal}) => {
    console.log(animal.animal)
  return<div>

     <p> Hier kommen die Katzen hin.</p>
    <Footer />
  </div>;
};

export default Katzen;
