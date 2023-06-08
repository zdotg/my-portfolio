import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-purple-700">
      <div className="container mx-auto px-4">
        <Link href="/">
          <div className="navbar-brand">
            <div className="text-2xl font-bold text-white">
              Zach <span className="text-gradient">Gallman</span>
            </div>
          </div>
        </Link>
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
          className="collapse navbar-collapse justify-end"
          id="NavBar"
        >
          <ul className="navbar-nav pt-2">
            <li className="nav-item">
              <Link href="#About">
                <div className="nav-link">About Me</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Skills">
                <div className="nav-link">Skills & Certifications</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Portfolio">
                <div className="nav-link">Portfolio</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Contact">
                <div className="nav-link">Contact Me</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

