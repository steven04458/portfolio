import { useEffect, useRef } from 'react';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import './Slides.css';

function Slide() {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  useEffect(() => {
    if (sliderForRef.current && sliderNavRef.current) {
      $(sliderForRef.current).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: sliderNavRef.current
      });
      
      $(sliderNavRef.current).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: sliderForRef.current,
        dots: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1270,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });
    }
    

    return () => {
      // Cleanup on component unmount
      $(sliderForRef.current).slick('unslick');
      $(sliderNavRef.current).slick('unslick');
    };
  }, []);

  return (
    <div className="main">
      <div className="slider slider-nav" ref={sliderNavRef}>
        <div>
          <p>janv.2021 - mars 2021</p>
          <h3>Technicien Support Informatique - Stage</h3>
        </div>
        <div>
          <p>janv.2022 - mai 2022</p>
          <h3>Technicien Support Informatique</h3>
        </div>
        <div>
          <p></p>
          <h3>3</h3>
        </div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
      </div>
      <div className="slider slider-for" ref={sliderForRef}>
        <div><h3>Technicien Support Informatique - Stage</h3></div>
        <div><h3>Technicien Support Informatique</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
      </div>
    </div>
  );
}

export default Slide;
