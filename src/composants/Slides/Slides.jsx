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
        slidesToShow: 4,
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
          <div className='slider-case'>
            <p className='slide-date'>janv.2021 - mars 2021</p>
            <h3>Technicien Support Informatique - Stage</h3>
            <p>Mairie, Talmont st Hilaire 85440 </p>
          </div>
        </div>
        <div>
          <div className='slider-case'>
            <p className='slide-date'>janv.2022 - mai 2022</p>
            <h3>Technicien Support Informatique</h3>
            <p>ECF, 79260 La Crèche</p>
          </div>
        </div>
        <div>
          <div className='slider-case'>
            <h3>Portfolio</h3>
            <p>https://github.com/steven04458/portfolio</p>
          </div>
        </div>
        {/* <div><div className='slider-case'><h3>4</h3></div></div>
        <div><div className='slider-case'><h3>5</h3></div></div> */}
      </div>
      <div className="slider slider-for" ref={sliderForRef}>
        <div>
          <div className='slider-case'>
            <h3>Technicien Support Informatique - Stage</h3>
            <p>* Mise à jour des sites internes (HTML, CSS, PHP) et vérification de leur base de données <br />
              * Restructuration de GPO dans un active directory <br />
              * Développement d'une API en langage Perle, permet la récupération de données et définit les données en 3 états (neutre / warning / critical) <br />
              * Environnement de l'OS : Windows / Linux <br />
            </p>
          </div>
        </div>
        <div>
          <div className='slider-case'>
            <h3>Technicien Support Informatique</h3>
            <p>* Prise des appels et correction des problèmes <br />
              * Changer le disque dur d'un ordinateur en SSD puis remettre un nouvel OS <br />
              * Utilisation de VSphere client <br />
              * Utilisation de GLPI <br />
            </p>
          </div>
        </div>
        <div>
          <div className='slider-case'>
            <h3>Portfolio</h3>
            <p>Le portfolio est un outil indispensable, d'autant plus pour les développeurs qui peuvent démontrer leurs compétences en créant leur propre site. Pour ma part, j'ai réalisé mon portfolio en tant que rendu de fin de cycle Bachelor. </p>
          </div>
        </div>
        {/* <div><div className='slider-case'><h3>4</h3></div></div>
        <div><div className='slider-case'><h3>5</h3></div></div> */}
      </div>
    </div>
  );
}

export default Slide;
