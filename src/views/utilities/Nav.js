import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
   return (
      <header>
         <nav>
            <NavLink to='/'>
               <h2>Adebayo Oluwatobiloba</h2>
            </NavLink>
            <p>Menu</p>

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
