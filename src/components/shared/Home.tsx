import React from "react";
import Header from "./Header";

import Carousel from "./Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="" style={{ height: "80px" }}></div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Bienvenue sur notre site de gestion des produits</h1>
              <Carousel />
              <hr className="hr" />
              <Link
                to="/products"
                className="btn btn-outline-primary text-center"
              >
                Liste des produits
              </Link>
              <p className="mt-2">
                Simplifiez votre gestion, optimisez votre catalogue et atteignez
                vos objectifs commerciaux avec facilité.
                <br />
                Découvrez comment notre site peut vous aider à gérer vos
                produits de manière efficace et productive.
                <br />
                Commencez dès maintenant pour une expérience de gestion
                simplifiée et fructueuse !
              </p>
            </div>
          </div>
        </div>
      </main>

    </React.Fragment>
  );
}

export default Home;
