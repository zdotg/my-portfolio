import React from 'react';
import '../styles/globals.css';

const Experience = () => {
  return (
    <div className="card mx-auto pt-5 pb-5 bg-purple-700">
      <div className="card-body d-flex align-items-center">
        <div className="col" style={{ zIndex: '2' }}>
          <div className="pb-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="main-text text-center">
                  <span className="text-gradient border-style-one">
                    Academic
                  </span>{' '}
                  Qualifications
                </h4>
                <ul className="text-center">
                  <li className="pt-2 main-text list-none text-sm">
                    NuCamp's Full Stack Mobile and Web Development Bootcamp
                  </li>
                  <small className="main-text text-xs">GRADUATED May 2023</small>
                  <li className="pt-2 main-text list-none">B.S. from The University of Montevallo</li>
                  <small className="main-text text-xs">GRADUATED 2013</small>
                </ul>
              </div>
              <div>
                <h4 className="main-text text-center">
                  <span className="text-gradient border-style-one">Job</span> Experience
                </h4>
                <ul className="text-center">
                  <li className="pt-2 main-text list-none">Crocodile Wine - Wine Sales Specialist</li>
                  <small className="main-text text-xs">Current work</small>
                  <li className="pt-2 main-text list-none">
                    Windsor Boutique Hotel - Hotel Concierge
                  </li>
                  <small className="main-text text-xs">Current work</small>
                  <li className="pt-2 main-text list-none">Bottle Riot - Bartender</li>
                  <small className="main-text text-xs">2017-2019</small>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
