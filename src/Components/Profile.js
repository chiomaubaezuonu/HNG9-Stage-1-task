import React from "react";
import Links from "../Components/Links";
// import './variables.scss';
import Footer from "../Components/Footer";

function Profile() {

  return (
    <div>
      <div className="wrapper">
        <div className="profile">
        <img src="./images/share-btn.png" id="share" alt="share" />
        <img src="./images/mobile-share.png" id="mobile-share" alt="share" />
          <img src="./images/oma.jpg" id="profile__img" alt="profile-pic" />
          <h2 id="twitter">Chioma Precious</h2>
          <h1 id="slack"> Chioma Ubaezuonu1</h1>
        </div>
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
