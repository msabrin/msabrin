import React from "react";
import './About.css'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="about">
          <div className="me container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="h1 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Esha.
              </h1>
              <h2 className="hidden lg:inline-block">
              I'm a Professional Web devoloper.
              </h2>
              <p className="mb-8 leading-relaxed">
              Mirza Sabrin here, a student passionate about leveraging web development to make a 
              positive impact in my community. With a focus on meaningful contributions through 
              programming, I bring enthusiasm and dedication to my work. Also, holding the title 
              of a national skater, I strive to blend my passion for technology and athleticism 
              to create impactful projects.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="wrk inline-flex text-black bg-plum-500 border-0 py-2 px-6 focus:outline-none hover:bg-plum-600 rounded text-lg">
                  Work With Me
                </Link>
                <a
                  href="#projects"
                  className="see ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="img object-cover object-center rounded"
                alt="Esha"
                src="https://pbs.twimg.com/media/FygDsCYacAA6ni9.jpg"
              />
            </div>
          </div>
        </section>
      );    
}