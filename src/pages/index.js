import React from 'react';
import Link from 'gatsby-link';

import profile from '../assets/profile.jpg';

const IndexPage = () => (
  <div className="home">
    <h1>Welcome to my home</h1>
    <img
      className="picture"
      src="https://avatars0.githubusercontent.com/u/13966707?v=4&s=460"
      alt="Dennis Konieczek"
    />
    <div className="signature">
      <p>Full Stack Web developer</p>
      <p>Toronto, Canada</p>
    </div>
  </div>
);

export default IndexPage;
