import React from 'react';
import Link from 'gatsby-link';

import twitter from '../assets/twitter.jpg';
import linkedin from '../assets/linkedin.jpg';
import github from '../assets/github.jpg';
import instagram from '../assets/instagram.jpg';
import email from '../assets/email.jpg';

const ContactPage = () => (
  <div className="contact">
    <h2>Contact</h2>
    <p className="text">
      For any general inquiries or questions, you can email me directly at{' '}
      <a href="mailto:konieczekdennis@gmail.com?Subject=I%20have%20a%20question%21&Body=Hey%20Dennis%2C%0A%0AI%27m%20reaching%20out%20to%20you%20after%20finding%20your%20email%20on%20dkonieczek.com%0A%0AMy%20question%20is%3A">
        konieczekdennis@gmail.com
      </a>{' '}
      or tweet me&nbsp;<a
        href="https://twitter.com/dkonieczek"
        target="_blank"
        rel="noopener"
      >
        @dkonieczek
      </a>
    </p>
    <p className="text">
      If you are a recruiter with a position that you think I would find
      exciting, please message me on&nbsp;
      <a
        href="https://www.linkedin.com/in/dkonieczek/"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </a>{' '}
      instead.
    </p>
    <div className="social">
      <div className="social-item">
        <a href="https://twitter.com/dkonieczek" target="_blank" rel="noopener">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="social-item">
        <a
          href="https://www.linkedin.com/in/dkonieczek/"
          target="_blank"
          rel="noopener"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="social-item">
        <a href="mailto:konieczekdennis@gmail.com?Subject=I%20have%20a%20question%21&Body=Hey%20Dennis%2C%0A%0AI%27m%20reaching%20out%20to%20you%20after%20finding%20your%20email%20on%20dkonieczek.com%0A%0AMy%20question%20is%3A">
          <img src={email} alt="email" />
        </a>
      </div>
      <div className="social-item">
        <a href="https://github.com/dkonieczek" target="_blank" rel="noopener">
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="social-item">
        <a
          href="https://instagram.com/dkonieczek"
          target="_blank"
          rel="noopener"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactPage;
