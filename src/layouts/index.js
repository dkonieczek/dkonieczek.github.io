import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <h1>
        <Link to="/">Dennis Konieczek</Link>
      </h1>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Dennis Konieczek"
      meta={[
        {
          name: 'description',
          content:
            'Dennis Konieczek - Full stack web developer based in Toronto, Canada.,'
        },
        {
          name: 'keywords',
          content: 'Dennis Konieczek,web,developer,portfolio'
        }
      ]}
    />
    <Header />
    <div className="page-wrapper">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
