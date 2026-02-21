import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://image2url.com/r2/default/images/1771643255736-5e636502-a501-4bc1-a58c-8bb652dce8bd.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Denzel21Ward" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/regan-daniel-350175374/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Regan Daniel</h1>
          <p>UBC Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Denzel21Ward" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/regan-daniel-350175374/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;