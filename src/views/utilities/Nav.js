import gsap from 'gsap/gsap-core';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { gsap } from 'gsap';

const Nav = () => {
   const [reversed, setReversed] = useState(true);
   const toggleNav = () => {
      setReversed(!reversed);
      const navOpen = document.querySelector('.nav-open');
      const contact = document.querySelector('.contact');
      const social = document.querySelector('.social-links');
      const menu = document.querySelector('nav > p');
      const logo = document.querySelector('nav a');

      const timeline = gsap.timeline({ paused: true });

      timeline
         .fromTo(navOpen, 0.5, { y: '-100%' }, { y: 0 })
         .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })
         .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 })
         .fromTo(menu, 0.5, { color: 'white' }, { color: 'black' })
         .fromTo(logo, 0.5, { color: 'white' }, { color: 'black' }, '-=0.5');

      reversed ? timeline.play() : timeline.reverse();
   };
   return (
      <header>
         <nav>
            <NavLink to='/'>
               <h2>Adebayo Oluwatobiloba</h2>
            </NavLink>
            <p onClick={toggleNav}>Menu</p>

            <div className='nav-open'>
               <div className='about-nav'>
                  <NavLink to='/about'>
                     <h3>About</h3>
                  </NavLink>
               </div>
               <div className='contact'>
                  <h3>Contact Me</h3>
                  <p>adebayotob@gmail.com</p>
               </div>
               <div className='social-links'>
                  <h3>Social Media</h3>
                  <div className='links'>
                     <Link to=''>
                        <i className='fab fa-facebook-f'></i>
                     </Link>
                     <Link to=''>
                        <i className='fab fa-twitter'></i>
                     </Link>
                     <Link to=''>
                        <i className='fab fa-github'></i>
                     </Link>
                     <Link to=''>
                        <i className='fab fa-linkedin-in'></i>
                     </Link>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Nav;
