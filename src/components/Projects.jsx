import React from "react";
import portfolio from "../images/portfolio.png";
import wineShop from "../images/little-wine-shop.png";
import photography from "../images/photography.png";
import "../styles/projects.css";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Portfolio" className="project-section">
      <div class="container">
        <div className="row ">
          <h2 className="main-text text-center">Projects</h2>
          <div className="col-12 col-md-6 col-lg-4" style={{ padding: 0 }}>
            <div className="card project-card d-flex flex-column h-100 mb-3 mx-auto">
              <img
                src={portfolio}
                className="card-img-top img-fluid"
                alt="Portfolio Snippet"
              />
              <div className="card-body main-text d-flex flex-grow-1">
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-gradient pt-3">
                      Personal Portfolio
                    </h5>
                    <p className="card-text">
                      Portfolio using React, Bootstrap, JavaScript, and CSS
                    </p>
                  </div>
                  <Link
                    href="https://github.com/zdotg/zg-portfolio"
                    className="btn button-gradient main-text"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4" style={{ padding: 0 }}>
            <div className="card project-card d-flex flex-column h-100 mb-3 mx-auto">
              <img
                src={wineShop}
                className="card-img-top img-fluid"
                alt="Little Wine Shop"
              />
              <div className="card-body main-text d-flex flex-grow-1">
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-gradient">
                      Little Wine Shop
                    </h5>
                    <p className="card-text">
                      Mock Wine Shop using React, Bootstrap, JavaScript,
                      MongoDB, and CSS
                    </p>
                    <p className="card-text" style={{ fontSize: ".75rem" }}>
                      This project is a work in progress.
                    </p>
                  </div>
                  <Link
                    href="https://github.com/zdotg/little_wine_shop"
                    className="btn button-gradient main-text"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4" style={{ padding: 0 }}>
            <div className="card project-card d-flex flex-column h-100 mx-auto">
              <img
                src={photography}
                className="card-img-top img-fluid"
                alt="Photography Portfolio"
              />
              <div className="card-body main-text d-flex flex-grow-1">
                <div className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-gradient">
                      Photography Portfolio
                    </h5>
                    <p className="card-text">Personal photography portfolio.</p>
                    <p className="card-text" style={{ fontSize: ".75rem" }}>
                      This project is a work in progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
