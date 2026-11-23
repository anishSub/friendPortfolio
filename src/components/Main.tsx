import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImg from '../assets/images/profile.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Prasanna Shrestha" style={{ height: '150px', objectFit: 'cover' }} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/prasanna-shrestha-acca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prasanna Shrestha</h1>
          <p>ACCA (Applied Skills) & BBS | Finance, Accounting & Sponsorship</p>
          <p style={{ fontSize: '1rem', marginTop: '12px', maxWidth: '620px', lineHeight: '1.5', opacity: 0.9 }}>
            Treasurer at LOFA Pokhara and Sponsorship Lead for TEDxChipledhunga 2026. Skilled in financial reporting, budgeting, VAT/PAN compliance, and strategic partnerships.
          </p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/prasanna-shrestha-acca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;