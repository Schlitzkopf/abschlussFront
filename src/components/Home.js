import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to={"hunde"}>
              <img
                className="d-block w-100 "
                src="https://cdn.wamiz.fr/article/images/WAMIZ%20DE/Hunde%20im%20Park%20breit.jpg"
                alt="First slide"
              />{" "}
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"katzen"}>
              <img
                className="d-block w-100"
                src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2019/10/CatGrassPetTalk.png"
                alt="Second slide"
              />{" "}
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"nagetiere"}>
              <img
                className="d-block w-100"
                src="https://images.koelle-zoo.de/media/image/79/00/ba/Sind_Hamster_Einzelg-anger_Teaser.jpg"
                alt="Third slide"
              />{" "}
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
