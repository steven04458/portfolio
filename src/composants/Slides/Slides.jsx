import { useState } from 'react';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Slides.css';

function Slide({ id, bgClass, seanceClass, titreClass, listClass }) {
  return (
    <div className="swiper-slide">
      <a href={`#${id}`} id={`link${id}`} className="link" rel={id}>
        <div className={`swiper-card ${bgClass}`}>
          <p className={`seance ${seanceClass}`}>
            <span className="fr_lang"></span>
            <span className="en_lang"></span>
          </p>
          <p className={`titre-seance ${titreClass}`}>
            <span className="fr_lang"></span>
            <span className="en_lang"></span>
          </p>
          <p className={`list ${listClass}`}>
            <span className="fr_lang"></span>
            <span className="en_lang"></span>
          </p>
          <br /><br />
          <svg id="arrow-down" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
            <path d="M100,157.2c-4.2,0-8.4-1.6-11.6-4.7l-83.3-81c-6.6-6.4-6.8-17-0.3-23.6c6.4-6.6,17-6.8,23.6-0.3l71.7,69.7l71.7-69.7 c6.6-6.4,17.2-6.3,23.6,0.3c6.4,6.6,6.3,17.2-0.3,23.6l-83.3,81C108.4,155.6,104.2,157.2,100,157.2z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default Slide;