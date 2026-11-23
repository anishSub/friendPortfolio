import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/prasanna-shrestha-acca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio of <a href="https://www.linkedin.com/in/prasanna-shrestha-acca/" target="_blank" rel="noreferrer">Prasanna Shrestha</a></p>
    </footer>
  );
}

export default Footer;