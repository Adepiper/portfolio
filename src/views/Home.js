import React, { useEffect } from 'react';
import Nav from './utilities/Nav';
import laraleft from '../assets/portfolio/laraleft.png';
import lararight from '../assets/portfolio/lararight.png';
import wiremoneyLeft from '../assets/portfolio/wiremoneyleft.png';
import wiremoneyRight from '../assets/portfolio/wiremoneyright.png';
import pipesLeft from '../assets/portfolio/pipesleft.jpg';
import pipesRight from '../assets/portfolio/pipesright.jpg';
import { gsap } from 'gsap';
// import hoverButton from '../assets/portfolio/hover.svg';

const Home = () => {
   // const page = document.querySelectorAll('.page');

   useEffect(() => {
      init();
      // console.log(page);
   });

   const init = () => {
      const pages = document.querySelectorAll('.page');
      const slides = document.querySelectorAll('.slide');
      const backgrounds = [
         `radial-gradient(50% 50% at 50% 50%, #5C5D6E 0%, #101123 100%)`,
         `radial-gradient(50% 50% at 50% 50%, #024873 0%, #101123 100%)`,
         `radial-gradient(50% 50% at 50% 50%, #530B0B 0%, #000000 100%)`,
      ];
      let current = 0;
      // let scrollSlide = 0;
      slides.forEach((slide, index) => {
         slide.parentElement.addEventListener('click', function () {
            changeDots(this.querySelector('svg'));
            nextSlide(index);
         });
      });

      const changeDots = (element) => {
         slides.forEach((slide) => {
            slide.classList.remove('active');
         });
         element.classList.add('active');
      };

      const nextSlide = (number) => {
         const nextPage = pages[number];
         const currentPage = pages[current];
         const nextLeft = nextPage.querySelector(
            '.project-image-container .left'
         );
         const nextRight = nextPage.querySelector(
            '.project-image-container .right'
         );
         const currentLeft = currentPage.querySelector(
            '.project-image-container .left'
         );
         const currentRight = currentPage.querySelector(
            '.project-image-container .right'
         );

         const nextText = nextPage.querySelector('.details');
         const portfolioContainer = document.querySelector(
            '.portfolio-container'
         );
         // const tl = new TimelineMax();

         gsap
            .timeline()
            .fromTo(currentLeft, 0.3, { opacity: 1 }, { opacity: 0 })
            .fromTo(currentRight, 0.3, { opacity: 1 }, { opacity: 0 }, '-=0.2')
            .to(portfolioContainer, 0.3, {
               background: backgrounds[number],
            })
            .fromTo(
               currentPage,
               0.3,
               { opacity: 1, pointerEvents: 'all' },
               { opacity: 0, pointerEvents: 'none' }
            )
            .fromTo(
               nextPage,
               0.3,
               { opacity: 0, pointerEvents: 'none' },
               { opacity: 1, pointerEvents: 'all' },
               '-=0.6'
            )
            .fromTo(nextLeft, 0.3, { y: '-40%' }, { y: '10%' }, '-=0.8')
            .fromTo(nextRight, 0.3, { y: '40%' }, { y: '0%' }, '-=0.8')
            .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
            .set(nextLeft, { clearProps: 'all' })
            .set(nextRight, { clearProps: 'all' });
         current = number;
      };

      // document.addEventListener('wheel', throttle(scrollChange, 10000));
      // document.addEventListener('touchmove', throttle(scrollChange, 10000));
      // function scrollChange(event) {
      //    if (event.deltaY > 0) {
      //       scrollSlide += 1;
      //    } else {
      //       scrollSlide -= 1;
      //    }

      //    if (scrollSlide > 2) {
      //       scrollSlide = 0;
      //    }
      //    if (scrollSlide < 0) {
      //       scrollSlide = 2;
      //    }
      //    switchDots(scrollSlide);
      //    nextSlide(scrollSlide);
      // }

      // const switchDots = (dotNumber) => {
      //    const active = slides[dotNumber];
      //    slides.forEach((slide) => {
      //       slide.classList.remove('active');
      //    });
      //    active.classList.add('active');
      // };
   };

   // const throttle = (func, limit) => {
   //    let inThrottle;
   //    return function () {
   //       const args = arguments;
   //       const context = this;
   //       if (!inThrottle) {
   //          func.apply(context, args);
   //          inThrottle = true;
   //          setTimeout(() => (inThrottle = false), limit);
   //       }
   //    };
   // };
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
                  <img className='left' src={laraleft} alt='hello' />{' '}
                  <img className='right' src={lararight} alt='hello' />
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
                  <img className='left' src={wiremoneyLeft} alt='hello' />{' '}
                  <img className='right' src={wiremoneyRight} alt='hello' />
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
                  <img className='left' src={pipesLeft} alt='hello' />{' '}
                  <img className='right' src={pipesRight} alt='hello' />
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
                        fillOpacity='1'
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
                        fillOpacity='1'
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
                        fillOpacity='1'
                     />
                  </svg>
               </div>
            </div>
         </main>
      </div>
   );
};

export default Home;
