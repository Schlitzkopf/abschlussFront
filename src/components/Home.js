import React from 'react';

const Home = () => {
  return <div>
      <div className='Flex'>
 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tiervermittlung
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Hunde</a>
          <a class="dropdown-item" href="#">Katzen</a>
          <a class="dropdown-item" href="#">Nagetiere</a>
          <a class="dropdown-item" href="#">Notfellchen</a>
          <a class="dropdown-item" href="#">Glückskinder</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Spenden & Helfen
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Pflegestellen</a>
          <a class="dropdown-item" href="#">Flugpaten</a>
          <a class="dropdown-item" href="#">Tiersitter</a>
          <a class="dropdown-item" href="#">Tierschutzhelfer</a>
          <a class="dropdown-item" href="#">Suchmeldung</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">RSS-Feed</a>
          <a class="dropdown-item" href="#">Datenschutz</a>
          <a class="dropdown-item" href="#">Content</a>
          <a class="dropdown-item" href="#">Werbung</a>
          <a class="dropdown-item" href="#">Impressum</a>
          <a class="dropdown-item" href="#">Kontakt</a>
          <a class="dropdown-item" href="#">Cookies</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ratgeber
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Bücher</a>
          <a class="dropdown-item" href="#">Hundesteuer</a>
          <a class="dropdown-item" href="#">Rechtsanwälte</a>
        </div>
      </li>
      </div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn.wamiz.fr/article/images/WAMIZ%20DE/Hunde%20im%20Park%20breit.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.stuttgarter-zeitung.de/media.media.06244e09-de99-491f-8126-f24f372742a0.original1024.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.os.fressnapf.com/cms/2020/07/Ratgeber_Kleintier_goldhamster_1200x527.jpg?t=cmsimg_920" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>;
};

export default Home;
