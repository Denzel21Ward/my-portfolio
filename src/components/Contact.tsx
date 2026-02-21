import React from 'react';
import '../assets/styles/Contact.scss';
import { Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>I'm always open to discussing new projects, new opportunities, and looking to gain experience in the industry.</p>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center" 
            className="social-stack"
          >
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/regan-daniel-350175374/"
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/regan_daniel89" // Replace with your handle
              target="_blank"
            >
              Instagram
            </Button>

            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href="mailto:regandaniel89@gmail.com" // Replace with your email
            >
              Email Me
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/Denzel21Ward"
              target="_blank"
            >
              GitHub
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Contact;
