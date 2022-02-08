import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          <div className="carousel-item active" style={{ height: "100%" }}>
            <Link to={"hunde"}>
              <img
                className="d-block w-100 h-100 homeHight"
                src="https://www.mera-petfood.com/files/_processed_/a/4/csm_iStock-521697453_7570f7a9b6.jpg"
                alt="First slide"
                style={{ objectFit: "cover" }}
              />{" "}
              <div class="card-img-overlay text-center">
                <h5 class="carousel-Text">Finde deinen Freund fürs Leben</h5>
              </div>
            </Link>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <Link to={"katzen"}>
              <img
                className="d-block  w-100 h-100 homeHight card-image"
                src="https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2019/10/CatGrassPetTalk.png"
                alt="Second slide"
                style={{ objectFit: "cover" }}
              />{" "}
              <div class="card-img-overlay text-center">
                <h5 class="carousel-Text">Jedes Tier hat ein Zuhause verdient</h5>
              </div>
            </Link>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <Link to={"nagetiere"}>
              <img
                className="d-block  w-100 h-100 homeHight card-image"
                src="https://images.koelle-zoo.de/media/image/79/00/ba/Sind_Hamster_Einzelg-anger_Teaser.jpg"
                alt="Third slide"
                style={{ objectFit: "cover" }}
              />{" "}
              <div class="card-img-overlay text-center">
                <h5 class="carousel-Text">Die Liebe eines Tieres ist die ehrlichste</h5>
              </div>
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
