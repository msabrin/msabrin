// game.js
import React, { useEffect, useRef } from 'react';
import $ from "jquery";
import "./game.css";

const Game = () => {
    const quest = useRef(null);

    useEffect(() => {
      const nobtn = document.getElementById('no');
  
      if (nobtn) {
        nobtn.addEventListener('click', () => {
          const h1Element = document.querySelector('.gm');
  
          if (h1Element && quest.current) {
            h1Element.innerHTML = "Sad to hear that 😢";
          }
        });
      }
  
      $(function () {
        $(".tricky").on({
          mouseover: function () {
            $(this).css({
              left: (Math.random() * 90) + "%",
              top: (Math.random() * 90) + "%",
            });
          }
        });
  
        $(".btn-wrap").hover(function () {
          $(this).toggleClass('active');
        });
      });
  
      $('.tricky').bind('touchstart', function () {
        $(this).css({
          left: (Math.random() * 90) + "%",
          top: (Math.random() * 90) + "%"
        });
      });
    }, []);



  return (
    <div>
        <div class="wrapper">
  
  <h1 className='gm'>Feeling bored! Wanna play a game?</h1>
  
  <div id='no' class="btn-wrap static">
    <a href="javascript:void(0)" class="btn" title="No">
      <span ref={quest}>No</span>
    </a>
  </div>

  <div class="btn-wrap tricky">
    <a href="javascript:void(0)" class="btn" title="Yes">
      <span></span>
    </a>
  </div>
  
</div>
    </div>
  );
};

export default Game;
