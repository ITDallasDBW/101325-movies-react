import React from "react";
import logoPic from "../assets/movieLogo.1.png";
import titlePic from "../assets/wtmShowtime.3.png";
import App from "../App";

const Header = () => {
  const resetHome = () => {
    window.location.reload();
  };

  return (
    <>
      <header>
        <div className="navbar">
          <figure className="logo" id="Home" onClick={resetHome}>
            <a href="#" className="homeLink">
              <img src={logoPic} alt="" className="logo__img" />
            </a>
          </figure>
          <div className="navlinks">
            <a href="#" className="link__hover--effect">
              Home
            </a>
            <a href="/movieInfo.html" className="link__hover--effect">
              to movieInfo
            </a>
            <a href="mailto" className="btn__contact">
              Contact
            </a>
          </div>
        </div>
        <figure>
          <img src={titlePic} alt="" className="title" />
        </figure>
      </header>
    </>
  );
};

export default Header;
