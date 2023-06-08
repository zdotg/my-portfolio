import React from "react";
import emoji from "../images/emoji-sticker.png";
import "../styles/intro.css";
import "../App.css";

const Intro = () => {
  return (
    <div className="card mx-auto intro-card pb-5 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-8">
            <div className="pb-2">
              <small className="main-text">Welcome to my world</small>
              <h2 className="main-text">Hi, I'm Zach</h2>
              <h3 className="main-text">
                <span className="text-gradient">A </span>
                Full Stack <span className="text-gradient">Web Developer</span>
              </h3>
              <small className="main-text">
                Utilizing a blend of technical skills, a growth mindset, and a
                dedication to continuous learning!
              </small>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-5 center">
                <a
                  href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing"
                  className="btn button-gradient main-text"
                  role="button"
                >
                  View My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={emoji}
              alt="My memoji"
              className=" img-border-intro"
              style={{ zIndex: 2, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
