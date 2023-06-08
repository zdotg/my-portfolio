import React, { useState } from "react";
import "../App.css";
import AboutMemoji from "../images/AboutMemoji.png";
import "../styles/about.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card mx-auto about-card pt-5 pb-5" id="About">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-5">
            <img
              src={AboutMemoji}
              alt="My memoji"
              className=" img-border-about"
              style={{ zIndex: 2, maxWidth: "100%" }}
            />
          </div>
          <div className="col-12 col-sm-7">
            <div className="pb-2">
              <h2 className="main-text">
                About <span className="text-gradient">Me</span>
              </h2>
              <small className={`main-text ${isExpanded ? "expanded" : ""}`}>
                I am a passionate and driven individual who discovered my love
                for web development during the height of the pandemic. As the
                world faced unprecedented challenges, I found solace and
                inspiration in the vast world of software engineering. This
                newfound passion quickly turned into an obsession, leading me to
                enroll in NuCamp, a comprehensive bootcamp.
                {isExpanded && (
                  <>
                    {" "}
                    Currently, I am on a transformative journey to become a full
                    stack developer, focusing on industry-leading languages and
                    technologies. My curriculum includes a wide range of topics
                    such as web development fundamentals, HTML, CSS, JavaScript,
                    server-side development with NodeJS, Express, and MongoDB,
                    multiplatform mobile app development with React Native,
                    front-end web UI frameworks like Bootstrap, front-end
                    JavaScript library React, SDLC, Agile, DevOps, CI/CD, and
                    deploying apps to top cloud providers including Amazon AWS,
                    Microsoft Azure, and Google Cloud/Firestore. Additionally, I
                    am building a strong foundation in Javascript fundamentals,
                    data structures, algorithms, and SQL. Prior to my pursuit of
                    a career in software engineering, I worked in the
                    hospitality industry with a focus on concierge services and
                    wine sales. However, driven by my passion for technology and
                    the desire for a more impactful career, I have decided to
                    transition into the dynamic and ever-evolving field of web
                    development. With a blend of technical skills, a growth
                    mindset, and a dedication to continuous learning, I am
                    excited to contribute my knowledge and collaborate with
                    like-minded professionals in a challenging and rewarding
                    software engineering role. I am actively seeking
                    opportunities where I can leverage my skills, adaptability,
                    and enthusiasm to create innovative solutions and make a
                    positive impact. I am open to new opportunities and would
                    love to connect with companies that value creativity,
                    collaboration, and a strong commitment to excellence. Let's
                    work together to shape the future through the power of
                    technology.
                  </>
                )}
              </small>
            </div>
            <button
              className="btn button-gradient main-text"
              onClick={handleToggle}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
