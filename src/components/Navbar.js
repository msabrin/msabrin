import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import logo from "./image/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setFontColor] = useState('');
  const [hireMeColor, setHireMeColor] = useState('');

  

  useEffect(() => {
    const currentPath = location.pathname;

    // Set different background colors based on the current route
    if (currentPath === '/contact') {
      setBackgroundColor('#b97ffa');
      setFontColor('black');
      setHireMeColor('#b97ffa')
    } else if (currentPath === '/') {
      setBackgroundColor('plum');
      setFontColor('black');
      setHireMeColor('#FFC0CB');
    } else if (currentPath === '/whychoosem') {
      setBackgroundColor('#2556a8');
      setFontColor('white');
      setHireMeColor('#2861bf');
    } else {
      // Default background color for other routes
      setBackgroundColor('pink');
      setHireMeColor('pink')
    }

    // Optional: Console log for debugging
    console.log(currentPath);
  }, [location]);


    return (
      <header style={{ backgroundColor }}  className="nav bg-plum-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
            <Link to="/" className="ml-3 text-xl">
              <img className="logo" alt="logo" src={logo}/>
            </Link>
          {/* </a> */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-900	flex flex-wrap items-center text-base justify-center">
            <Link style={{ color:fontColor }}  className="nab mr-5 md:border-gray-900" to='/'>About</Link>
            <Link style={{ color:fontColor }}  className="nab mr-5 md:border-l md:border-gray-900 pl-5" to='/whychoosem'>Why Choose Me</Link>
            <Link style={{ color:fontColor }}  className="nab mr-5 md:border-l md:border-gray-900 pl-5" to='/contact'>contact</Link>

          </nav>
          <Link
            to='/contact'
            style={{ color: hireMeColor }}
            className="hm inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </header>
    );
  }

  export default Navbar;

//   breakpoint (768px)