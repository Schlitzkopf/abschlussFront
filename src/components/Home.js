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
     <Link to={"hunde"}><img className="d-block w-100 " src="https://cdn.wamiz.fr/article/images/WAMIZ%20DE/Hunde%20im%20Park%20breit.jpg" alt="First slide" /> </Link>
    </div>
    <div className="carousel-item">
      <Link to={"katzen"}><img className="d-block w-100" src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2019/10/CatGrassPetTalk.png" alt="Second slide" /> </Link>
    </div>
    <div className="carousel-item">
      <Link to={"nagetiere"}><img className="d-block w-100" src="https://images.koelle-zoo.de/media/image/79/00/ba/Sind_Hamster_Einzelg-anger_Teaser.jpg" alt="Third slide" /> </Link>
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
