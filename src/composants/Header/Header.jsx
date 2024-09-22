import $ from 'jquery'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  //responsive menu toggle
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  $(document).ready(function() {
    //add active className on menu
    // $('ul li').click(function(e) {
    //   e.preventDefault();
    //   $('li').removeClass('active');
    //   $(this).addClass('active');
    // });
  //drop down menu	
      $(".drop-down").hover(function() {
        $('.mega-menu').addClass('display-on');
      });
      $(".drop-down").mouseleave(function() {
        $('.mega-menu').removeClass('display-on');
      });
  
  });

  return (
    <>
      <div className="container">
        <div className="xs-menu-cont">
          <a id="menutoggle" onClick={toggleMenu}>
            <i className="fa fa-align-justify"></i> 
          </a>
          <nav className={`xs-menu ${menuVisible ? '' : 'displaynone'}`}>
            <ul>
              <li className="active">
                <a href="/portfolio/">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <Link to={'/portfolio/Blog'} >
                  Blog
                </Link>              
              </li>
              <li>
                <a href="#">Contact</a>
              </li>

            </ul>
          </nav>
        </div>

        <nav className="menu">
          <ul>
            <li className="active">
              <a href="/portfolio/">Home</a>
            </li>
            <li className="drop-down">
              <a href="#">Products</a>

              <div className="mega-menu fadeIn animated">
                <div className="mm-6column">
                  <span className="categories-list">
                    <ul>
                      <span>Accés rapides</span>
                      <li><a href="#skills">Mes compétences</a></li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>

                </div>
                <div className="mm-3column">
                  <span className="categories-list">
                    <ul>
                      <span>Contact</span>
                      <li><a href="mailto:steven.magaud@ynov.com">Mail</a></li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>
                </div>
                <div className="mm-3column">
                  <span className="categories-list">
                    <ul>
                      <span>à propos</span>
                      <li><a href="/portfolio/download/CV_steven.pdf" download="CV_steven.pdf">Mon CV</a></li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>
                </div>
              </div>

            </li>
            <li>
              <Link to={'/portfolio/Blog'} >
                Blog
              </Link>
            </li>
            <li style={{ float: 'right' }}>
              <a href="https://github.com/steven04458/" target="_blank">Go my GitHub</a>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
