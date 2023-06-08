import React from "react";
import "../styles/header.css";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-styles nav-text">
      <div className="container-fluid ">
        <a href="#" className="navbar-brand" style={{ paddingLeft: "1rem" }}>
          <div className="display-6 main-text">
            Zach <span className="text-gradient">Gallman</span>;
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#NavBar"
          aria-controls="NavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="NavBar"
          style={{ paddingRight: "1rem" }}
        >
          <ul className="navbar-nav  pt-2">
            <li className="nav-item ">
              <a className="nav-link nav-text" href="#About">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Skills">
                Skills & Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#Contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
