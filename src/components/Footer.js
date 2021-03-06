import React from 'react';

const footerStyle = {
  margin: '50px 0 35px 0',
  bottom: '0',
  left: '0',
  right: '0',
  height: '30px',
  paddingTop: '25px',
  borderTop: '1px dotted #3d3d3d',
  padding: '5px 0 10px 0'
}

const driveLogoStyle = {
  height: '20px',
  width: '20px'
}

const logoStyle = {
  height: '20px',
  width: '20px',
  padding: '0 5px 15px 5px'
}

const emailStyle = {
  display:'block', 
  margin:'3px 0 7px 0', 
  fontSize:'11px'
}

const cityStyle = {
  margin: '0'
}

const Footer = props => {
  return (
    <div style={footerStyle}>
      <br/>
      <a href='https://drive.google.com/open?id=1gCwZffM66EE0M_Qjt9Rrx2-6rErxyAZc' target='blank'><img style={driveLogoStyle} src='https://image.flaticon.com/icons/svg/179/179324.svg' alt='google drive logo'/></a>
      <p style={cityStyle}>Brooklyn, NY</p>
      <a href='mailto:destinmcmurry@gmail.com'><p style={emailStyle}>destinmcmurry@gmail.com</p></a>
      <a href='https://codepen.io/destinmcmurry/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/51/51767.svg' alt='codepen'/></a>
      <a href='https://www.linkedin.com/in/destin-mcmurry/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/145/145807.svg' alt='linkedin'/></a>
      <a href='https://github.com/destinmcmurry' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/25/25231.svg' alt='github'/></a>
      <a href='https://www.instagram.com/destinisabeach/' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/174/174855.svg' alt='instagram'/></a>
      <a href='https://medium.com/@destinmcmurry' target='blank'><img style={logoStyle} src='https://image.flaticon.com/icons/svg/81/81661.svg' alt='medium'/></a>
    </div>
  );
}

export default Footer;
