import $ from 'jquery'
import { useState } from 'react'
import './Header.css'

function Header() {
  $(document).ready(function() {
    //responsive menu toggle
    $("#menutoggle").click(function() {
      $('.xs-menu').toggleClass('displaynone');

      });
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
          <a id="menutoggle"><i className="fa fa-align-justify"></i> </a>
          <nav className="xs-menu displaynone">
            <ul>
              <li className="active">
                <a href="">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
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
                  {/* <span className="left-images">
                    <img src="https://4.bp.blogspot.com/-faF-AemPFUM/U4ryP7pQRsI/AAAAAAAAEvA/fZ-hskCSln4/s1600/Magento%2Bthemes.jpg">
                    <p>Most Popular Styles </p>
                  </span> */}
                  <span className="categories-list">
                    <ul>
                      <span>Computer</span>
                      <li>Desktops</li>
                      <li>Laptops</li>
                      <li>Tablets</li>
                      <li>Monitors</li>
                      <li>Networking Printers</li>
                      <li>Scanners</li>
                      <li>Jumpers & Cardigans</li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>

                </div>
                <div className="mm-3column">
                  <span className="categories-list">
                    <ul>
                      <span>TV & Video</span>
                      <li>LED TVs</li>
                      <li>Plasma TVs</li>
                      <li>3D TVs</li>
                      <li>DVD & Blu-ray Players</li>
                      <li>Home Theater Systems</li>
                      <li>Cell Phones</li>
                      <li>Apple iPhone</li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>
                </div>
                <div className="mm-3column">
                  <span className="categories-list">
                    <ul>
                      <span>Car Electronics</span>
                      <li>GPS & Navigation</li>
                      <li>In-Dash Stereos</li>
                      <li>Speakers</li>
                      <li>Subwoofers</li>
                      <li>Amplifiers</li>
                      <li>MP3 Players</li>
                      <li>iPods</li>
                      <li><a className="mm-view-more" href="#">View more →</a></li>
                    </ul>
                  </span>
                </div>
              </div>

            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>

            </li>
            <li>
              <a target="_blank" href="#">Contact</a>
            </li>
            <li style={{ float: 'right' }}>
              <a href="https://github.com/steven04458/" target="_blank">Go my Blog</a>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
