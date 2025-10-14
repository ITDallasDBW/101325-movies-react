import React from 'react';
import logoPic from '../assets/movieLogo.1.png';
import titlePic from '../assets/wtmShowtime.3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <figure className="logo" id="Home">
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

        <section className="search">
          <figure>
            <img src={titlePic} alt="" className="title" />
          </figure>
          <div className="search__wrapper">
            <input
              type="text"
              className="search__input"
              id="idBox"
              placeholder="What movie are you looking for?"
            />
            <div className="search__icon" id="idBtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="message-box__locator">
            <div className="message-box hidden">
              <div className="message-text">
                Look for <span className="italic">THAT</span> movie
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
