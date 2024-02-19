// Footer.js
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const [backgroundColor, setBackgroundColor] = useState('');
    const [fontColor, setFontColor] = useState('');
    const [iconColor, setIconColor] = useState('');
    
  
    useEffect(() => {
      const currentPath = location.pathname;
  
      // Set different background colors based on the current route
      if (currentPath === '/contact') {
        setBackgroundColor('#b377f7');
        setFontColor('black');
        setIconColor('black');
      } else if (currentPath === '/') {
        setBackgroundColor('plum');
        setFontColor('black');
        setIconColor('black');
      } else if (currentPath === '/whychoosem') {
        setBackgroundColor('#2556a8');
        setFontColor('white');
        setIconColor("white");
      } else {
        // Default background color for other routes
        setBackgroundColor('pink');
      }
  
      // Optional: Console log for debugging
      console.log(currentPath);
    }, [location]);
  


  return (
    <footer style={{ backgroundColor, color: fontColor }}  className="text-white p-4 text-center">
      <p>
        Mirza Sabrin &copy; {new Date().getFullYear()} | Web Developer & National Skater
      </p>
      <div className="flex justify-center items-center mt-2">
        <a href="your-github-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400" style={{ color: iconColor, fontSize: '58px' }}/>
        </a>
        <a href="your-linkedin-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-400" style={{ color: iconColor, fontSize: '58px' }} />
        </a>
        <a href="your-twitter-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-gray-400" style={{ color: iconColor, fontSize: '58px' }} />
        </a>
        <a href="your-facebook-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white hover:text-gray-800" style={{ color: iconColor, fontSize: '58px' }} />
        </a>
        <a href="your-instagram-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-gray-400" style={{ color: iconColor, fontSize: '58px' }}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
