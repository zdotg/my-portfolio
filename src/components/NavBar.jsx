'use client'

import React from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold text-black cursor-pointer">
            Zach <span className="text-gradient">Gallman</span>;
          </div>
        </Link>
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <span className="fas fa-bars text-black"></span>
        </button>
        <div className={`md:flex items-center ${isOpen ? '' : 'hidden'}`}>
          <ul className="md:flex space-x-4">
            <li className="nav-item">
              <Link href="#About">
                <div className="text-black cursor-pointer">About Me</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Skills">
                <div className="text-black cursor-pointer">Skills & Certifications</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Portfolio">
                <div className="text-black cursor-pointer">Portfolio</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Contact">
                <div className="text-black cursor-pointer">Contact Me</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
