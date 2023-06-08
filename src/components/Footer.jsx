import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <h5 className="main-text">Socials</h5>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.instagram.com/zach.g33/"
              >
                <i className="fab fa-instagram main-text"></i>
              </a>
              <a className="social-icon" href="https://github.com/zdotg">
                <i className="fab fa-github main-text"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/zach-gallman/"
              >
                <i className="fab fa-linkedin main-text"></i>
              </a>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="contact-info">
              <a
                role="button"
                className="contact-link main-text"
                href="tel:+13347181224"
              >
                <i className="fas fa-phone"></i> 1-334-718-1224
              </a>
              <br />
              <a
                role="button"
                className="contact-link main-text"
                href="mailto:zach.ecab@gmail.com"
              >
                <i className="fas fa-envelope main-text"></i>{" "}
                zach.ecab@gmail.com
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
