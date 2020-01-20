import React from 'react';
import logo from './logo.svg';
import './App.scss';
import recommendation1 from './assets/images/recommendation_photo_1.jpg'
import recommendation2 from './assets/images/recommendation_photo_2.jpg'
import recommendation3 from './assets/images/recommendation_photo_3.jpg'
import recommendation4 from './assets/images/recommendation_photo_4.jpg'
import recommendation5 from './assets/images/recommendation_photo_5.jpg'
import recommendation6 from './assets/images/recommendation_photo_6.jpg'

import certificate1 from './assets/images/certificate_1.png'
import certificate2 from './assets/images/certificate_2.png'
import certificate3 from './assets/images/certificate_3.png'
import certificate4 from './assets/images/certificate_4.png'

import certificate5 from './assets/images/certificate_5.png'


import myPic1 from './assets/images/myPic1.jpg'
import avatar1 from './assets/images/photo-1.jpg'

import carrotIcon from './assets/images/carrot.png'
import booksIcon from './assets/images/books.png'
import jsIcon from './assets/images/js.png'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="promo">
        <h1 className="promo--title">Frontend Developer</h1>
      </header> */}

      {/* Section About */}
      {/* <section className="section section__about"> 
        <div className="content-holder">
          <img src={myPic1} className="avatar" alt="Angelika Kachur" />
          <div className="text">
            <p>
              Hey, I'm Angelika Kachur. A Frontend Developer in Finland.
            </p>
          </div>
          <a className="link" href="#section__cv">
            You can know more about me
          </a>
        </div>
      </section> */}

      {/* Section CV */}
      <section className="section section__cv" id="section__cv">
        <aside className="aside">
          <div className="info">
            <div className="photo photo__circle">
              <img src={avatar1} alt="Angelika Kachur" />
            </div>

            <div className="name">Angelika Kachur</div>

            <ul className="about-list">
              <li>Frontend Developer</li>
              <li>Vue.js enthusiast</li>
              <li>Pet lover</li>
            </ul>

            <a href="tel:0413661530">041 366 15 30</a>
            <a href="mailto:angelika.kachur">angelika.kachur@gmail.com</a>

            <div className="add-links">
              <a href="https://www.linkedin.com/in/angelika-kachur" target="_blank" rel="noopener noreferrer">linkedin.com/in/angelika-kachur</a>
              <a href="https://github.com/angelika-kachur" target="_blank" rel="noopener noreferrer">github.com/angelika-kachur</a>
            </div>
          </div>

          <div className="notes">
            <h4 className="title">Noticeable Works:</h4>
            <ul className="list">
              <li>
                <a href="http://catchapp.io" target="_blank" rel="noopener noreferrer">http://catchapp.io</a>
              </li>
              <li>
                <a href="https://angelika-kachur-template.herokuapp.com"
                  target="_blank" rel="noopener noreferrer">https://angelika-kachur-template.herokuapp.com</a>
              </li>
              <li>
                <a href="http://whiteboard.clinic" target="_blank" rel="noopener noreferrer">http://whiteboard.clinic</a>
              </li>
              <li>
                <a href="http://treatunique.com.au" target="_blank" rel="noopener noreferrer">http://treatunique.com.au</a>
              </li>
              <li>
                <a href="http://sfinvestments.com.au" target="_blank" rel="noopener noreferrer">http://sfinvestments.com.au</a>
              </li>
              <li>
                <a
                  href="https://github.com/Angelika-Kachur/rens-frontend-task">github.com/angelika-kachur/rens-frontend-task</a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main">

          <div className="col">

            <div className="experience-block block">
              <h3 className="title">Experience</h3>
              <div className="experience-list">

                <div className="experience">
                  <div className="company-name">
                    Integrify
                  </div>
                  <div className="info">
                    <div className="position">
                      Junior Frontend Developer
                    </div>
                    <div className="time">
                      (September 2019 — present)
                    </div>
                  </div>
                  <div className="text">
                    Internship at <a href="https://www.integrify.io" target="_blank" rel="noopener noreferrer">https://www.integrify.io</a>
                  </div>
                </div>

                <div className="experience">
                  <div className=""></div>
                  <div className="company-name">
                    Finnish courses and Työharjoittelu
                  </div>
                  <div className="info">
                    <div></div>
                    <div className="time">
                      (October 2018 — September 2019)
                    </div>
                  </div>
                  <div className="text">
                    During this time I moved to Finland and started to learn Finnish every day on the <a
                      href="https://www.te-palvelut.fi/te/fi/" target="_blank" rel="noopener noreferrer">TE-toimisto</a>
                    courses.
                    <br />
                    I had a 2-week internship in <a href="https://puida.com/" target="_blank" rel="noopener noreferrer">Puida</a>
                    startup.
                    <br />
                    There I worked with Vue.js, created a notification system and
                    fixed not trivial UI bugs.
                    <br />
                    Also, I visited <a href="https://www.facebook.com/groups/free.code.camp.helsinki/"
                      target="_blank" rel="noopener noreferrer">FreeCodeCamp
                      Helsinki</a>, <a href="https://theshortcut.org/" target="_blank" rel="noopener noreferrer">theshortcut</a> and <a
                      href="https://codebar.io/" target="_blank" rel="noopener noreferrer">Codebar</a> lessons.
                    <br />
                    On the last one, I even was a tutor and taught HTML and CSS.
                  </div>
                </div>

                <div className="experience">
                  <div className="company-name">
                    EPAM Systems
                  </div>
                  <div className="info">
                    <div className="position">
                      Frontend Developer Trainee
                    </div>
                    <div className="time">
                      (October 2017 — June 2018)
                    </div>
                  </div>
                  <div className="text">
                    Creation of online shop
                    with responsive markup, custom slider, the possibility to add products to the basket,
                    price recalculation, and data in the localStorage.
                    <br />
                    <a href="https://angelika-kachur-template.herokuapp.com"
                      target="_blank" rel="noopener noreferrer">https://angelika-kachur-template.herokuapp.com</a>
                  </div>
                </div>

                <div className="experience">
                  <div className=""></div>
                  <div className="company-name">
                    Freelance
                  </div>
                  <div className="info">
                    <div className="position"></div>
                    <div className="time">
                      (November 2016 — October 2017)
                    </div>
                  </div>
                  <div className="text">
                    Creation of different Australian projects:
                    <br />
                    <a href="http://treatunique.com.au" target="_blank" rel="noopener noreferrer">http://treatunique.com.au</a> for a medical service
                    dedicated to the
                    health and
                    treatment of Adolescents and Young Adults diagnosed with cancer.
                    <br />
                    <a href="http://whiteboard.clinic" target="_blank" rel="noopener noreferrer">http://whiteboard.clinic</a> for communication and
                    information shared
                    in
                    real-time by Doctors.
                    <br />
                    <a href="http://michaelarmstrong.net.au" target="_blank" rel="noopener noreferrer">http://michaelarmstrong.net.au</a> for Michael
                    Armstrong and
                    his team who formulate the
                    strategy for customers property.
                    <br />
                    <a href="http://sfinvestments.com.au" target="_blank" rel="noopener noreferrer">http://sfinvestments.com.au</a> for Solid
                    Foundation Investments
                    in financials.
                  </div>
                </div>

                <div className="experience">
                  <div className="company-name">
                    CHI Software
                  </div>
                  <div className="info">
                    <div className="position">
                      Web Developer
                    </div>
                    <div className="time">
                      (December 2015 — November 2016)
                    </div>
                  </div>
                  <div className="text">
                    <a href="http://catchapp.io" target="_blank" rel="noopener noreferrer">http://catchapp.io</a> markup for unique desktop and mobile
                    recorder that
                    captures screen
                    activities.
                  </div>
                </div>

                <div className="experience">
                  <div className="company-name">
                    Projestic
                  </div>
                  <div className="info">
                    <div className="position">
                      Web Developer
                    </div>
                    <div className="time">
                      (March 2015 — December 2015)
                    </div>
                  </div>
                  <div className="text">
                    Created small widgets for companies like <a href="https://sap-alumni.com/"
                      target="_blank" rel="noopener noreferrer">SapAlumni</a>, <a href="https://enterprisealumni.com/"
                      target="_blank" rel="noopener noreferrer">EnterpriseAlumni</a>, and
                    markup of
                    e-mail templates.
                  </div>
                </div>

                <div className="experience">
                  <div className="company-name">
                    W3 Ukraine
                  </div>
                  <div className="info">
                    <div className="position">
                      Web Developer Trainee
                    </div>
                    <div className="time">
                      (December 2014 – March 2015)
                    </div>
                  </div>
                  <div className="text">
                    Internship in W3 Ukraine as a Web Developer.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col">

            <div className="skills-block block">
              <h3 className="title">Skills</h3>
              <div className="skills">
                <ul className="list">
                  <li>
                    <div className="name">HTML5</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">CSS3</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">LESS</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Responsive</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">JavaScript</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">React</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Vue</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">TypeScript</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Storybook</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Jest</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">GIT</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Webpack</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Heroku</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Node.js</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Electron</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Linux</div>
                    <div className="rates">
                      <span className="point active"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                      <span className="point"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hobbies-block block">
              <h3 className="title">Hobbies</h3>
              <ul className="hobbies">
                <li>
                  <img src={jsIcon} />
                  <span>Coding</span>
                </li>
                <li>
                  <img src={booksIcon} />
                  <span>Books</span>
                </li>
                <li>
                  <img src={carrotIcon} />
                  <span>Cooking</span>
                </li>
              </ul>
            </div>

          </div>

        </main>
      </section>

      {/* Section Recommendations */}
      <section className="section section__recommendations">
        <h2 className="section--title">Recommendations</h2>

        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation5} alt="Pauli Suuraho"/>
          </div>
          <div className="person">
            <div className="name">Pauli Suuraho</div>
            <div className="position">Founder at Puida</div>
            <div className="work">July 10, 2019, Angelika worked with Pauli in the same group</div>
          </div>
          <div className="text">
            Angelika was a summer trainee at Puida for two weeks and within that time she adjusted to our development style, implemented on her own a notification system to our flagship product and even went on to find and fix few UI bugs. Her problem solving and loving attitude, ability to learn and adapt to rapidly changing new technologies is a must have asset to any company. Would be happy to recommend her to any frontend developer position. 
          </div>
        </div>

        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation6} alt="Jaakko Mukka"/>
          </div>
          <div className="person">
            <div className="name">Jaakko Mukka</div>
            <div className="position">Co-Founder at Puida</div>
            <div className="work">July 12, 2019, Angelika worked with Jaakko in the same group</div>
          </div>
          <div className="text">
            During her summer internship, Anzhelika's attitude and passion towards her work was admirable and her enthusiasm contagious. She works diligently until tasks are completed well, and won't leave things halfway. Looks for new solutions and information independently, but isn't afraid to ask for advice proactively. Taking into account the bigger picture, she also validates her solutions with other relevant members of the team, such as designers. Fast learner and adopter, certainly an asset to any team!
          </div>
        </div>

        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation4} alt="Tero Könönen"/>
          </div>
          <div className="person">
            <div className="name">Tero Könönen</div>
            <div className="position">R&amp;D and Project Management</div>
            <div className="work">July 9, 2019, Tero managed Angelika directly</div>
          </div>
          <div className="text">
            Angelika constantly amazed me with how fast she was able learn new skills and make use of them. Angelika is proactive, ambitious and committed to learn and develop herself. Angelika's enthusiasm and dedication is both inspiring and motivating to people around her. She will be an asset to any company. Certainly worth recommending. 
          </div>
        </div>

        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation3} alt="Mark Zuev"/>
          </div>
          <div className="person">
            <div className="name">Mark Zuev</div>
            <div className="position">Vice President, Head of Departments at CHI Software</div>
            <div className="work">March 20, 2019, Mark managed Angelika directly</div>
          </div>
          <div className="text">
            Angelika is very responsible and talented person. All tasks were completed on time and at the highest level. It has been great working with you and I hope to work with you again in the future.
          </div>
        </div>

        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation2} alt="Ivan Kleshnin"/>
          </div>
          <div className="person">
            <div className="name">Ivan Kleshnin</div>
            <div className="position">Software Engineer, Mentor</div>
            <div className="work">January 24, 2019, Ivan was Angelika’s mentor</div>
          </div>
          <div className="text">
            Had a pleasure to mentor Angelika in 2018-2019. She helped me to research topics and integrate an embedded IDE editor to the client side of a web app. Angelika is an intelligent person and has many valuable talents. In short: both her hard and soft skills are on par and our level of communication was great. I sincerely hope to collaborate more with here in the future.
          </div>
        </div>
        
        <div className="recommendation">
          <div className="photo photo__circle">
            <img src={recommendation1} alt="Arseny Burekhi"/>
          </div>
          <div className="person">
            <div className="name">Arseny Burekhin</div>
            <div className="position">Scrum Master – Takeoff Technologies, Inc.</div>
            <div className="work">September 1, 2016, Arseny managed Angelika directly</div>
          </div>
          <div className="text">
            I had a pleasure to work with Angelika. Although it was a short and remote work I didn't have any impediments usually relevant to this kind of work. Angelika was always up-to-date, professional and cheerful with very positive attitude to her work. She has a problem-solved mind looking for solutions. I recommend her and gladly would work with her again.
          </div>
        </div>

        <div className="gratitude">
          Thank you for so kind words and all great things that I've learned from you!
        </div>
      </section>

      {/* Section Certificates */}
      <section className="section section__certificates">
        <h2 className="section--title">Certificates</h2>

        <div className="certificate">
          <div className="name"><b>HTML, CSS and JavaScript</b> - Coursera</div>
          <img className="img" src={certificate5} alt="Certificate"/>
        </div>
      </section>

       {/* Section Tests */}
       <section className="section section__tests">
        <h2 className="section--title">Test Results</h2>

        <div className="test">
          <div className="name"><b>CSS</b> - Pluralsight</div>
          <img className="img" src={certificate2} alt="test"/>
        </div>

        <div className="test">
          <div className="name"><b>HTML</b> - Pluralsight</div>
          <img className="img" src={certificate1} alt="test"/>
        </div>

        <div className="test">
          <div className="name"><b>JS</b> - Pluralsight</div>
          <img className="img" src={certificate4} alt="test"/>
        </div>

        <div className="test">
          <div className="name"><b>React</b> - Pluralsight</div>
          <img className="img" src={certificate3} alt="test"/>
        </div>
      </section>

   </div>
  );
}

export default App;
