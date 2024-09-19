import { useState, useEffect } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blog.css';
import Header from '../../composants/Header/Header.jsx';
import Footer from '../../composants/Footer/Footer.jsx';
import BoutonsToTheTop from '../../composants/BoutonsToTheTop/BoutonsToTheTop.jsx';
import Slide from '../../composants/Slides/Slides.jsx';

function Blog() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // SLIDER SWIPER  
    $(document).ready(function () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          960: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1270: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    });

    // LIEN HREF TABLEAU
    $('tr[data-href]').each(function() {
      var $th = $(this);
      $th.on('touchstart mousedown', function() {
        window.open($th.attr('data-href'), $th.attr('data-target'));
      });
    });
    $('td[data-href]').each(function() {
      var $th = $(this);
      $th.on('click', function() {
        return !window.open($th.attr('data-href'));
      });
    });

    // OPEN & CLOSE POPUP
    $('.cd-popup').on('touchstart touchmove touchend mousedown', function(event) {
      if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('is-visible');
      }
    });

    // Close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
      if (event.which == '27') {
        $('.cd-popup').removeClass('is-visible');
      }
    });

    // RÉSUMÉS LONGS
    $(".fold-table tr.view").on("click", function() {
      $(this).toggleClass("open").prev(".fold").toggleClass("open");
    });

    // ANNEXE
    var $allContentDivs = $('#infocontent div').hide(); // Hide All Content Divs
    $('#linkwrapper a').click(function() {
      var $contentDiv = $("#" + this.id + "content");

      if ($contentDiv.is(":visible")) {
        $contentDiv.hide(); // Hide Div
      } else {
        $allContentDivs.hide(); // Hide All Divs
        $contentDiv.fadeIn('slow'); // Show Div 
        $contentDiv.get(0).scrollIntoView();
      }

      // SCROLLABLE 
      $('.scrollable').css('display', 'block');
      return false;
    });

    $('#prev-next-program a').click(function() {
      var $contentDiv = $("#" + this.id + "content");

      if ($contentDiv.is(":visible")) {
        $contentDiv.hide(); // Hide Div
      } else {
        $allContentDivs.hide(); // Hide All Divs
        $contentDiv.fadeIn('slow'); // Show Div 
        $contentDiv.get(0).scrollIntoView();
      }

      // SCROLLABLE 
      $('.scrollable').css('display', 'block');
      return false;
    });
  }, []);

  return (
    <>
      <header className='head'>
        <Header />
        <section className='presentation'>
          <svg viewBox="0 0 1440 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M-5.73296e-06 65.5774L30.0208 72.6478C60.0417 79.7182 120.083 93.8591 180.125 98.5727C240.167 103.286 300.208 98.5727 360.25 77.3615C420.292 56.1503 480.333 18.4414 540.375 13.7278C600.417 9.01423 660.458 37.2959 720.5 51.4367C780.542 65.5775 840.583 65.5775 900.625 51.4367C960.667 37.2959 1020.71 9.01426 1080.75 1.94386C1140.79 -5.12654 1200.83 9.01428 1260.87 13.7279C1320.92 18.4415 1380.96 13.7279 1410.98 11.3711L1441 9.0143L1441 108L1410.98 108C1380.96 108 1320.92 108 1260.87 108C1200.83 108 1140.79 108 1080.75 108C1020.71 108 960.667 108 900.625 108C840.583 108 780.542 108 720.5 108C660.458 108 600.417 108 540.375 108C480.333 108 420.292 108 360.25 108C300.208 108 240.167 108 180.125 108C120.083 108 60.0417 108 30.0208 108L-9.44165e-06 108L-5.73296e-06 65.5774Z" fill="#E0E2E8"></path>
          </svg>
        </section>        
      </header>
      <BoutonsToTheTop /> 
      <div className='contenant'>
        <div className="swiper-main">
          <div className="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" transform="scale(1 -1)rotate(90)"><path d="M100 157.2c-4.2 0-8.4-1.6-11.6-4.7l-83.3-81c-6.6-6.4-6.8-17-.3-23.6 6.4-6.6 17-6.8 23.6-.3l71.7 69.7 71.7-69.7c6.6-6.4 17.2-6.3 23.6.3s6.3 17.2-.3 23.6l-83.3 81c-3.4 3.1-7.6 4.7-11.8 4.7"/></svg>            <br />
            <span className="fr_lang button-txt">précédent</span>
          </div> 
          
          <div className="swiper-container">
            <div className="swiper-wrapper" id="linkwrapper">
              <Slide id="seance1" bgClass="bgcard1" seanceClass="seance-semaine1" titreClass="titre-seance1" listClass="list" />
              <Slide id="seance2" bgClass="bgcard2" seanceClass="seance-semaine1" titreClass="titre-seance2" listClass="list" />
              <Slide id="seance3" bgClass="bgcard3" seanceClass="seance-semaine1" titreClass="titre-seance3" listClass="list" />
              <Slide id="seance4" bgClass="bgcard4" seanceClass="seance-semaine1" titreClass="titre-seance4" listClass="list" />
              {/* Add more slides as needed */}
            </div>
          </div>
          <div className="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" transform="matrix(0 1 1 0 0 0)"><path d="M100 157.2c-4.2 0-8.4-1.6-11.6-4.7l-83.3-81c-6.6-6.4-6.8-17-.3-23.6 6.4-6.6 17-6.8 23.6-.3l71.7 69.7 71.7-69.7c6.6-6.4 17.2-6.3 23.6.3s6.3 17.2-.3 23.6l-83.3 81c-3.4 3.1-7.6 4.7-11.8 4.7"/></svg>
            <span className="fr_lang button-txt">suivant</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;