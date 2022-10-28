import React from "react";
import "../Components/variables.scss";

const Links = () => {
  return (
    <div className="link-div">
      <a href="https://twitter.com/ChiomaPresh1029" id="twitter">
        <button>Twitter link</button>
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        <button>Zuri Team</button>
      </a>
      <a href="https://twitter.com/ChiomaPresh1029" id="books">
        <button>Zuri Books</button>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
        id="book__python"
      >
        <button>Phython Books</button>
      </a>
      <a href="https://background.zuri.team" id="pitch">
        <button>Background Check for Coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        <button>Design Books</button>
      </a>
      <div className="social-media">
        <a href="https://slack.com/get-started#/landing" id="slack-link">
          <img src="./images/slack.png" alt="slack-link" />
        </a>
        <a href="https://github.com/chiomaubaezuonu">
          <img src="./images/github.png" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Links;
