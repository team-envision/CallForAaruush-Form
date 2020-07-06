import React from 'react';
import logo from '../team_envision.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <a href='http://aaruush.org/'>
          <i class='fab fa-firefox'></i>
        </a>
        <a href='https://www.instagram.com/aaruush_srm/'>
          <i class='fab fa-instagram'></i>
        </a>

        <a href='https://www.facebook.com/aaruush.srm'>
          <i class='fab fa-facebook-f'></i>
        </a>
        <a href='https://twitter.com/aaruushsrmist'>
          <i class='fab fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/aaruush/'>
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a href='https://www.youtube.com/channel/UC6mwWpwkZchii-oyWz0v3dw'>
          <i class='fab fa-youtube'></i>
        </a>
        <img src={logo} alt='' />
      </div>
    </footer>
  );
}
