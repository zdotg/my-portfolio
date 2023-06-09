import React from "react";
import "../styles/globals.css";
import Bootstrap from "../public/images/certificates/Bootstrap.png";
import DSA from "../public/images/certificates/Data_StructuresandAlgos.png";
import ReactNative from "../public/images/certificates/React_Native.png";
import FrontEnd from "../public/images/certificates/Front_End_WebandMobile.png";
import FullStack from "../public/images/certificates/Full_Stack_WebandMobile.png";
import HCJ from "../public/images/certificates/HTML_CSS_JS.png";
import ReactCert from "../public/images/certificates/React.png";
import SQLDevops from "../public/images/certificates/Sql_Devops_Python.png";
import Modern from "../public/images/certificates/ModernSWE.png";
import SQLData from "../public/images/certificates/Sql_Data_MOdeling.png";

const Certs = () => {
  return (
    <div className="card certs-card ">
      <div className="card-body">
        <h2 className="main-text text-center">Certificates</h2>
        <div className="row text-center pb-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={HCJ} alt="Web Dev" />
              <p className="main-text">Web Dev Fundamentals Bootcamp</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={DSA} alt="Web Dev" />
              <p className="main-text">
                Python Fundamentals Data Structures, and Algorithms
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={SQLData} alt="Web Dev" />
              <p className="main-text">SQL and Python</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={Modern} alt="Web Dev" />
              <p className="main-text">
                Modern Software Engineering with DevOps
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={SQLDevops} alt="Web Dev" />
              <p className="main-text">
                Backend Python, SQL, and Devops Bootcamp
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={Bootstrap} alt="Web Dev" />
              <p className="main-text">Front-End Web UI Framework: Bootstrap</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={ReactCert} alt="Web Dev" />
              <p className="main-text">Front End JavaScript Library: React</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={ReactNative} alt="Web Dev" />
              <p className="main-text">
                Multiplatform Mobile App Development with React Native
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={FrontEnd} alt="Web Dev" />
              <p className="main-text">
                Front End Web and Mobile Development Bootcamp
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <img className="enlarge" src={FullStack} alt="Web Dev" />
              <p className="main-text">
                Server-side Development with NodeJS Express and MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certs;
