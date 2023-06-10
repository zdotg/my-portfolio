import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="text-center bg-purple-700 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <h5 className="text-xl font-semibold mb-4">Socials</h5>
            <div className="flex justify-center space-x-4">
              <div href="https://www.instagram.com/zach.g33/">
                <a className="text-2xl"><i className="fab fa-instagram"></i></a>
              </div>
              <div href="https://github.com/zdotg">
                <a className="text-2xl"><i className="fab fa-github"></i></a>
              </div>
              <div href="https://www.linkedin.com/in/zach-gallman/">
                <a className="text-2xl"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="contact-info mt-4 md:mt-0">
              <div href="tel:+13347181224">
                <a role="button" className="contact-link block text-lg my-2">
                  <i className="fas fa-phone"></i> 1-334-718-1224
                </a>
              </div>
              <div href="mailto:zach.ecab@gmail.com">
                <a role="button" className="contact-link block text-lg my-2">
                  <i className="fas fa-envelope"></i> zach.ecab@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
