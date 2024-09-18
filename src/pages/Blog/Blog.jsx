import { useState } from 'react'
import $ from 'jquery'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blog.css'
import Header from '../../composants/Header/Header.jsx'
import Footer from '../../composants/Footer/Footer.jsx'

function Blog() {
  const [count, setCount] = useState(0)

  $(document).ready(function(){
    // BOUTONS TO THE TOP 
    var btn = $('#button, #button2');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
          btn.addClass('show');
        }
        else {
          btn.removeClass('show');
        }
      });
      
      btn.on('touchstart touchmove touchend mousedown', function(e) {
        e.stopPropagation(); e.preventDefault();
        $('html, body').animate({scrollTop:0}, '150');
      });
    });

  return (
    <>
      <header className='head'>
        <Header />
        <section className='presentation'>
          <svg viewBox="0 0 1440 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M-5.73296e-06 65.5774L30.0208 72.6478C60.0417 79.7182 120.083 93.8591 180.125 98.5727C240.167 103.286 300.208 98.5727 360.25 77.3615C420.292 56.1503 480.333 18.4414 540.375 13.7278C600.417 9.01423 660.458 37.2959 720.5 51.4367C780.542 65.5775 840.583 65.5775 900.625 51.4367C960.667 37.2959 1020.71 9.01426 1080.75 1.94386C1140.79 -5.12654 1200.83 9.01428 1260.87 13.7279C1320.92 18.4415 1380.96 13.7279 1410.98 11.3711L1441 9.0143L1441 108L1410.98 108C1380.96 108 1320.92 108 1260.87 108C1200.83 108 1140.79 108 1080.75 108C1020.71 108 960.667 108 900.625 108C840.583 108 780.542 108 720.5 108C660.458 108 600.417 108 540.375 108C480.333 108 420.292 108 360.25 108C300.208 108 240.167 108 180.125 108C120.083 108 60.0417 108 30.0208 108L-9.44165e-06 108L-5.73296e-06 65.5774Z" fill="#E0E2E8"></path></svg>
        </section>        
      </header>

      <a id="button"></a>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div className='contenant'>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </div>
      <Footer />
    </>
  )
}

export default Blog
