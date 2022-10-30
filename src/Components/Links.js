import React from "react";
import "../Components/variables.scss";

const Links = () => {
  return (
    <div className="link-div">
      <a href="https://twitter.com/ChiomaPresh1029" id="twitter" className="links">
        <button>ChiomaPresh1029</button>
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="links">
        <button>Zuri Team</button>
      </a>
      <a href="http://books.zuri.team" id="books" className="links">
        <button>Zuri Books</button>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
        id="book__python" className="links"
      >
        <button>Phython Books</button>
      </a>
      <a href="https://background.zuri.team" id="pitch" className="links">
        <button>Background Check for Coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design" className="links">
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
