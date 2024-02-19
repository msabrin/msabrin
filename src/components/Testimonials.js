import React from "react";
import $ from "jquery";
// import { UsersIcon } from "@heroicons/react/solid";
import { hku, meta } from "../data";
import Google from "./image/google.esha.png";
import Meta from "./image/meta.png";
import hkut from "./image/hku.png";
import udemy from "./image/udemy.png";
import klanguage from "./image/klanguage.png";
import "./test.css";
import "./move.css";

$(window).on('load resize scroll', function() {
  $('.bg-static').each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;

    // Set a threshold to determine when to stop the movement
    var maxLeftPosition = 25; // Adjust this value as needed

    // Check if the left position exceeds the threshold
    if (leftPosition > maxLeftPosition) {
      leftPosition = maxLeftPosition;
    }

    $(this)
      .find('.bg-move')
      .css({ left: leftPosition });
  });
});



export default function Testimonials() {
    return (
        <section id="testimonials">
               <div className="sctn bg-static">
     <div class="bg-move"></div>
     </div>
        
          <div className="container px-5 py-10 mx-auto text-center">
            {/* <UsersIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
              Crtfct
            </h1> */}
            <div className="inline-flex items-center">
            <div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
              <img alt="Google" src={Google}/>
                <p>27 hours (approximately). Grade Achieved: 100%</p>
              </div>
            </div>

            <div className="pht inline-flex items-center">
            <div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
              <img alt="mets" src={Meta}/>
               <div>
                <p>168 hours (Approximately)</p>
               </div>
              </div>
            </div>


  <div className="flex flex-wrap m-4">
  {meta.map((meta) => (
     <div className="p-4 md:w-1/3 w-full">
      <div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
 {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
       <div className="inline-flex items-center">
     <img
       alt="testimonial"
      src={meta.image}
      className="flex-shrink-0 object-cover object-center"
     />
      </div>
    <div>
      <span className="flex-grow flex flex-col pl-4">
      <span className="title-font font-medium text-white">
         {meta.company}
     </span>  
     </span>
   </div>
    <p className="leading-relaxed mb-6">{meta.quote}</p>
                  </div>
                </div>
              ))}
            </div>

<div className="inline-flex items-center">
<div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
  <img alt="hongkong" src={hkut}/>
    <p>The Hong Kong University of Science and Technology</p>
  </div>
</div>

<div className="row flex flex-wrap m-4">
  {hku.map((hku) => (
    <div className="p-4 md:w-1/3 w-full">
      <div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
        {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
        <div className="inline-flex items-center">
          <img
            alt="hongkong"
            src={hku.image}
            className="flex-shrink-0 object-cover object-center"
          />
        </div>
        <div>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">
              {hku.company}
            </span>  
         </span>
          </div>
       <p className="leading-relaxed mb-6">{hku.quote}</p>
      </div>
    </div>
  ))}
</div>

<div className="inline-flex items-center">
<div className="h-full bg-gray-800 bg-opacity-50 p-8 rounded">
  <a href="https://coursera.org/verify/specializat
ion/U76MJYCL5NTQ"><img alt="klanguage" src={klanguage}/></a>
    <p>17 hours (approximately). Grade Achieved: 91.23%</p>
  </div>
</div>

<div className="inline-flex items-center">
<div className="udmy h-full bg-gray-800 bg-opacity-50 p-8 rounded">
  <a href="https://coursera.org/verify/specializat
ion/U76MJYCL5NTQ"><img alt="udemy" src={udemy}/></a>
  </div>
</div>

</div>
</section>
);
}