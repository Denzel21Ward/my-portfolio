import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* Top GitHub Link */}
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
      
      <p>
        A portfolio built by Regan Daniel 
        {/* Your Links */}
        <a href="https://github.com/Denzel21Ward" target="_blank" rel="noreferrer"><GitHubIcon /></a> 
        <a href="https://www.linkedin.com/in/regan-daniel-350175374/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>.
        
        <br /> {/* Optional: Break line for readability */}
        
        Credit for web design and build (retrieved from Yuji Sato Github): 
        <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer"> Yuji Sato</a> 
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"> <LinkedInIcon /></a> 
        with 💜
      </p>
    </footer>
  );
}
export default Footer;