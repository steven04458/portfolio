import { useState } from 'react'
import $ from 'jquery'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './BoutonsToTheTop.css'

function BoutonsToTheTop() {
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
      <a id="button"></a>
    </>
  )
}

export default BoutonsToTheTop
