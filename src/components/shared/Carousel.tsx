import React from "react";
import produitImage from "./product-1.webp";
import produitImage2 from "./product-1.webp";

import welcome from "./product-1.webp";
import banner2 from "./product-1.webp";

function Carousel() {
  return (
    <div className="row">
      <div className="col">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={welcome}
                className="img-fluid w-100"
                alt="Sunset Over the City"
                style={{ height: "300px" }}
              />
            </div>

            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ height: "300px" }}
            >
              <img
                src={banner2}
                className="img-fluid w-100"
                alt="Canyon at Night"
              />
            </div>

            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ height: "300px" }}
            >
              <img
                src={banner2}
                className="img-fluid w-100"
                alt="Canyon at Night"
              />
            </div>

            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ height: "300px" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className="img-fluid w-100"
                alt="Canyon at Night"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
