import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = () => {
  return <div>
     <Navigation />
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Link to={"hunde"}><img className="d-block w-100" src="https://cdn.wamiz.fr/article/images/WAMIZ%20DE/Hunde%20im%20Park%20breit.jpg" alt="First slide" /> </Link>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.stuttgarter-zeitung.de/media.media.06244e09-de99-491f-8126-f24f372742a0.original1024.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://media.os.fressnapf.com/cms/2020/07/Ratgeber_Kleintier_goldhamster_1200x527.jpg?t=cmsimg_920" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<Footer />
</div>;
};

export default Home;
