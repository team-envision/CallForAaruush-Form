import React from 'react';
import logo from '../team_envision.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <a href='/'>
          <i class='fab fa-firefox'></i>
        </a>
        <a href='/'>
          <i class='fab fa-instagram'></i>
        </a>

        <a href='/'>
          <i class='fab fa-facebook-f'></i>
        </a>
        <a href='/'>
          <i class='fab fa-twitter'></i>
        </a>
        <a href='/'>
          <i class='fab fa-linkedin-in'></i>
        </a>
        <a href='/'>
          <i class='fab fa-youtube'></i>
        </a>
        <img src={logo} alt='' />
      </div>
    </footer>
  );
}
