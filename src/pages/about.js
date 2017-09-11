import React from 'react';
import Link from 'gatsby-link';

import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import tools from '../assets/tools.png';
import creative from '../assets/creative.png';
import design from '../assets/design.png';

const AboutPage = () => (
  <div className="about">
    <h2>About Me</h2>
    <p className="bio">
      Hey there! My name is Dennis Konieczek, I am a full stack web developer
      based in Toronto, Canada. I love all things tech, however I’ve focused my
      career on web development. I am familiar with a wide variety of skills and
      have worked on multiple exciting projects which you can check out here on
      my personal website.
    </p>
    <h3>Experience</h3>
    <ul>
      <li>
        <p className="date">07/2016 - Present</p>
        <p>
          Technical Support &amp; Software Developer
          <span>
            Tools: HTML, CSS, JavaScript, NodeJS, jQuery, PHP
            <br />
            <br />
            Developed solutions for integrating onboarding clients from
            ecommerce platforms such as Magento, Volusion, Bigcommerce, Yahoo,
            Shopify, 3DCart and NetSuite.
            <br />
            <br />
            Developed automated end to end test cases.
            <br />
            <br />
            Provided technical email &amp; phone support.
            <br />
            <br />
            Participated and provide opinion in daily standups and weekly sprint
            meetings as part of the scrum agile methodology.
          </span>
        </p>
      </li>
      <li>
        <p className="date">07/2014 - 07/2015</p>
        <p>
          Technical Support Specialist
          <span>
            Provided hardware, application and network specific support.
            <br />
            <br />
            Managed physical hardware assets
            <br />
            <br />
            Deployment of Cisco VoIP hardware
          </span>
        </p>
      </li>
    </ul>
    <h3>Skills</h3>
    <div className="skills">
      <div className="skill">
        <img src={frontend} />
        <p className="heading">Front End</p>
        <p className="desc">
          HTML5, CSS grid, Flexbox, SASS, Javascript (ES5/ES6), jQuery, React.js
        </p>
      </div>
      <div className="skill">
        <img src={backend} />
        <p className="heading">Back End</p>
        <p className="desc">Node, Express, MongoDB, PHP</p>
      </div>
      <div className="skill">
        <img src={tools} />
        <p className="heading">Tools</p>
        <p className="desc">Npm, Git, Webpack</p>
      </div>
      <div className="skill">
        <img src={creative} />
        <p className="heading">Creative Direction</p>
        <p className="desc">
          Agile/Scrum methodologies, effective communication
        </p>
      </div>
      <div className="skill">
        <img src={design} />
        <p className="heading">Design</p>
        <p className="desc">
          Responsive design, Accessibility, W3C Standards, Photoshop,
          Illustrator
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
