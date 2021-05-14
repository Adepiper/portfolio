import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <header>
         <nav>
            <NavLink to='/'>
               <h2>Adebayo Oluwatobiloba</h2>
            </NavLink>
            <NavLink to='/about'>
               <p>Menu</p>
            </NavLink>
         </nav>
      </header>
   );
};

export default Nav;
