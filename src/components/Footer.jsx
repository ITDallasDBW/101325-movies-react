import React from 'react';
import footerPic from '../assets/movieLogo.1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <a href="#home" className="footer__anchor">
                    <figure className="footer__logo">
                        <img src={footerPic} alt="" className="footer__logo--img" />
                    </figure>
                    <span className="footer__logo--popper">
                        Top
                        <FontAwesomeIcon icon={faArrowUp} />
                    </span>
                </a>
                <div className="footer__copy">
                    <p>&copy; 2025, Blake Williams</p>
                </div>
                <div className="footer__social">
                     <a
          href="https://www.linkedin.com/"
          target="_blank"
          class="fa-brands fa-linkedin"
        ><FontAwesomeIcon icon={faLinkedin} /></a>
                <a
          href="https://www.youtube.com/"
          target="_blank"
          class="fa-brands fa-youtube"
        ><FontAwesomeIcon icon={faYoutube} /></a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="fa-brands fa-instagram"
        ><FontAwesomeIcon icon={faInstagram} /></a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          class="fa-brands fa-tiktok"
        ><FontAwesomeIcon icon={faTiktok} /></a>

                    
                    
                    
                    
                </div>
            </footer>
        </>
    );
};

export default Footer;
