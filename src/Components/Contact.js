import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="form-data">
        <div className="form-title">
          <h1 className="contact">Contact me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className="name-inputs">
          <div>
            <label>FirstName </label>
            <br />
            <input
              id="first_name"
              className="names"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div>
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

        <label>
          Email
          <input id="email" placeholder="yourname@gmail.com"></input>
        </label>
        <textarea
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        ></textarea>
        <div>
          <input type="checkbox" />
          <label htmlFor="isFriendly">
            Do you agree to providing your data to {name} who may contact you.
          </label>
          <br />
        </div>
        <button id="btn__submit">Send message</button>
      </div>
    </div>
  );
};

export default Contact;
