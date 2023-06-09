import React from "react";
import "../styles/globals.css";

const Contact = () => {
  return (
    <div className="contact-section py-5">
      <h2 className="main-text text-center" id="Contact">
        Contact Me
      </h2>
      <div className="card main-text mx-auto" style={{ maxWidth: "65%" }}>
        <div className="card-body">
          <form
            className="form-text"
            action="https://formsubmit.co/zach.ecab@gmail.com"
            method="POST"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                style={{ minHeight: "10rem" }}
              ></textarea>
            </div>
            <button type="submit" className="btn button-gradient submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
