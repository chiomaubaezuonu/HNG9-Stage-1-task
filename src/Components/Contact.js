import React from "react";

const Contact = () => {
  const name = "Chioma Precious";
  return (
    <div>
      <div className="form-data">
        <div className="form-title">
          <h1 className="contact">Contact me</h1>
          <p id="contact-text">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <div className="name-inputs">
          <div className=" name-div">
            <label>FirstName </label>
            <br />
            <input
              id="first_name"
              className="names"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="name-div">
            <label>LastName</label>
            <br />
            <input
              id="last_name"
              className="names"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
        </div>

        <textarea
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        ></textarea>
        <div>
          <input type="checkbox" 
           
          />
          <label  id="checkbox">
            Do you agree to providing your data to {name} who may contact you.
          </label>
          <br />
        </div>
        <button id="btn__submit" onClick={() => alert("yes")}>
          Send message
        </button>
      </div>
      <div className="contact-footer">
        <img src="./images/Zuri-logo.png" className="contact-img" alt="logo" />
        <img
          src="./images/footer-text.png"
          className="contact-img"
          alt="text"
        />
        <img src="./images/I4G.png" className="contact-img" alt="I4G" />
      </div>
    </div>
  );
};

export default Contact;
