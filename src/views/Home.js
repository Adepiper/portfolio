import React from 'react';
import Nav from './utilities/Nav';
import laraleft from '../assets/portfolio/laraleft.png';
import lararight from '../assets/portfolio/lararight.png';
import wiremoneyLeft from '../assets/portfolio/wiremoneyleft.png';
import wiremoneyRight from '../assets/portfolio/wiremoneyright.png';
import pipesLeft from '../assets/portfolio/pipesleft.jpg';
import pipesRight from '../assets/portfolio/pipesright.jpg';
// import hoverButton from '../assets/portfolio/hover.svg';

const Home = () => {
   return (
      <div className='portfolio-container'>
         <Nav />
         <main>
            <section className='page lara'>
               <div className='details'>
                  <h1>Lara.ng</h1>
                  <p>
                     Lara is an Artificial Intelligence (AI) solution that helps
                     people in developing and fragmented cities plan, commute,
                  </p>
               </div>
               <div className='project-image-container'>
                  <img src={laraleft} alt='hello' />{' '}
                  <img src={lararight} alt='hello' />
               </div>
            </section>
            <section className='page wiremoney'>
               <div className='details'>
                  <h1>Wiremoney</h1>
                  <p>
                     Whether you are sending money to loved ones back home, or
                     getting payments from clients overseas, Wiremoney makes it
                     super easy and fast with ZERO transfer fees!
                  </p>
               </div>
               <div className='project-image-container'>
                  <img src={wiremoneyLeft} alt='hello' />{' '}
                  <img src={wiremoneyRight} alt='hello' />
               </div>
            </section>
            <section className='page pipes'>
               <div className='details'>
                  <h1>Pipes</h1>
                  <p>
                     Are you ready to pipe down watch your favorite movies at a
                     cost
                  </p>
               </div>
               <div className='project-image-container'>
                  <img src={pipesLeft} alt='hello' />{' '}
                  <img src={pipesRight} alt='hello' />
               </div>
            </section>

            <div className='pages'>
               <div className='page-1'>
                  <p>Lara</p>
                  <svg
                     className='slide active'
                     width='20'
                     height='20'
                     viewBox='0 0 40 40'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <circle
                        cx='20'
                        cy='20'
                        r='20'
                        fill='white'
                        fill-opacity='0.49'
                     />
                  </svg>
               </div>
               <div className='page-1'>
                  <p>Wiremoney</p>
                  <svg
                     className='slide'
                     width='20'
                     height='20'
                     viewBox='0 0 40 40'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <circle
                        cx='20'
                        cy='20'
                        r='20'
                        fill='white'
                        fill-opacity='0.49'
                     />
                  </svg>
               </div>
               <div className='page-1'>
                  <p>Pipes</p>
                  <svg
                     className='slide'
                     width='20'
                     height='20'
                     viewBox='0 0 40 40'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <circle
                        cx='20'
                        cy='20'
                        r='20'
                        fill='white'
                        fill-opacity='0.49'
                     />
                  </svg>
               </div>
            </div>
         </main>
      </div>
   );
};

export default Home;
