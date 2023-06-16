import React from "react";
import portfolio from "../public/images/portfolio.png";
import wineShop from "../public/images/little-wine-shop.png";
import photography from "../public/images/photography.png";
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="bg-white text-slate-700">
      <div className="container mx-auto px-4">
        <h2 className="text-center">Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-0">
            <div className="flex flex-col h-full mb-3 mx-auto overflow-hidden">
              <Image
                src={portfolio}
                className="w-full object-cover"
                alt="Portfolio Snippet"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h5 className="pt-3">Personal Portfolio</h5>
                    <p>Portfolio using React, Bootstrap, JavaScript, and CSS</p>
                  </div>
                  <div href="https://github.com/zdotg/zg-portfolio">
                    <a className="mt-4">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-0">
            <div className="flex flex-col h-full mb-3 mx-auto overflow-hidden">
              <Image
                src={wineShop}
                className="w-full object-cover"
                alt="Little Wine Shop"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h5>Little Wine Shop</h5>
                    <p>Mock Wine Shop using React, Bootstrap, JavaScript,
                      MongoDB, and CSS</p>
                    <p className="text-sm">This project is a work in progress.</p>
                  </div>
                  <div href="https://github.com/zdotg/little_wine_shop">
                    <a className="mt-4">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-0">
            <div className="flex flex-col h-full mb-3 mx-auto overflow-hidden">
              <Image
                src={photography}
                className="w-full object-cover"
                alt="Photography Portfolio"
              />
              <div className="flex flex-grow p-4">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h5>Photography Portfolio</h5>
                    <p>Personal photography portfolio.</p>
                    <p className="text-sm">This project is a work in progress.</p>
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
