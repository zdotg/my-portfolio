import React from "react";
import "../styles/globals.css";


const Skills = () => {
  const skills = [
    { name: "Front-End Development", progress: 80 },
    { name: "Back-End Development", progress: 60 },
    { name: "Full-Stack Development", progress: 65 },
    { name: "Database and Data Management", progress: 55 },
    { name: "DevOps and Deployment", progress: 50 },
    { name: "Software Development Practices and Tools", progress: 70 },
    { name: "Communication and Teamwork", progress: 90 },
  ];

  return (
    <div className="card skills-card" id="Skills">
      <div
        className="card-body mx-auto skills-border"
        style={{ maxWidth: "75%" }}
      >
        <h2 className="main-text text-center">Skills</h2>

        {skills.map((skill) => (
          <div
            className="progress mb-3"
            key={skill.name}
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning text-dark text-start px-2"
              style={{ width: `${skill.progress}%` }}
            >
              {skill.name}
            </div>
          </div>
        ))}

        <div className="row align-items-center text-left mx-2 main-text">
          <div className="col-12 col-md-4 mb-3">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
              <li>Python</li>
              <li>jQuery</li>
              <li>SQL/PostgreSQL Databases</li>
              <li>Bootstrap</li>
              <li>Cloud Deployments (AWS, GCS, Azure)</li>
              <li>Software Development Lifecycle</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <ul>
              <li>SCSS</li>
              <li>Responsive Web Design</li>
              <li>Mobile-First Design Principles</li>
              <li>Cross-Platform Design</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Passion to Learn</li>
              <li>Planning/Coordination with teams</li>
              <li>Wire-framing</li>
              <li>React Native</li>
              <li>Android Studio/Emulator</li>
              <li>React.Js</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <ul>
              <li>Redux/Context</li>
              <li>Dependencies</li>
              <li>Version Control</li>
              <li>NoSQL Databases</li>
              <li>DevOps</li>
              <li>MongoDB/Atlas</li>
              <li>Docker and Kubernetes</li>
              <li>Flask/Insomnia</li>
              <li>CI/CD Pipelines</li>
              <li>Agile methods</li>
              <li>Network Infrastructure Administration</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>

        <div className="row text-center my-auto pb-5">
          <div className="col-lg-12 center">
            <a
              href="https://github.com/zdotg"
              className="btn button-gradient main-text"
              role="button"
            >
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
