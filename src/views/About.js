import React from 'react';
import Nav from './utilities/Nav';
import Angular from '../assets/portfolio/angular.png';
import css from '../assets/portfolio/css.png';
import github from '../assets/portfolio/github.png';
import python from '../assets/portfolio/python.png';
import javascript from '../assets/portfolio/javascript.png';
import react from '../assets/portfolio/react.png';
const About = () => {
   return (
      <div className='about'>
         <header>
            <div className='jumbotron'>
               <Nav />
               <div>
                  <h3>Adebayo Oluwatobiloba</h3>
                  <p>Frontend Developer</p>
               </div>
            </div>
         </header>
         <main>
            <section className='about-me'>
               <h3>About Me.</h3>
               <div className='define-me'>
                  <p>
                     A software developer with more than 2 years of active
                     experience in web applications development. Having picked
                     up the coding skills many years ago, through my proven
                     stack of skills, I have contributed immensely to the growth
                     of a few organizations.
                  </p>
                  <p>
                     I currently work at Roadpreppers Technologies Ltd as a
                     Front-End Developer, where I work with a diverse and
                     cross-functional team of experts to create a digital
                     solution that allows users to schedule their journeys using
                     public transit.
                  </p>
               </div>
               <div className='lifestyle'>
                  <div className='lifestyle-info'>
                     <p>
                        I am passionate about solving issues that directly
                        affect fellow humans' everyday lives, and when the
                        problem has not been solved before, it becomes more
                        interesting. Professionally, the building elements
                        (languages) are defined by the project requirements, but
                        Javascript, Python, (HTML & CSS) & ReactJs are my
                        standard languages.
                     </p>

                     <p>
                        I'm a fan of video games on the flip side of work; FIFA
                        2021, Football Manager, Mortal Kombat & Car-races are
                        some of my favourites.
                     </p>
                     <p>
                        I really like to meet new people and one of my strong
                        suits is making friends real quick. Don't hesitate to
                        email me at adebayotob@gmail.com if you need my
                        services.
                     </p>
                  </div>
                  <div className='skillset'>
                     <img src={python} alt='' />
                     <img src={Angular} alt='' />
                     <img src={react} alt='' />
                     <img src={github} alt='' />
                     <img src={css} alt='' />
                     <img src={javascript} alt='' />
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
};

export default About;
