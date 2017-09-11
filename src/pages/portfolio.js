import React from 'react';
import Link from 'gatsby-link';

import ttc_complaints from '../assets/ttc-complaints.jpg';
import drone from '../assets/drone.jpg';
import eatxpress from '../assets/eatxpress.jpg';

const PortfolioPage = () => (
  <div className="portfolio">
    <h2>Portfolio</h2>

    <div className="item">
      <h3>TTC Complaints</h3>
      <div className="content">
        <img src={ttc_complaints} alt="TTC Complaints" />
        <div className="desc">
          <p>
            Single page application built using HTML, SASS, jQuery, Node,
            Express, MongoDB
          </p>
          <p>
            Allows a user to submit a complaint to a public Facebook like wall.
            Specifically, I built this with the intention to highlight some of
            the things people had to say about the TTC (Toronto Transit
            Commission)
          </p>
        </div>
      </div>
    </div>
    <div className="item">
      <h3>Micro Drone Flight Control</h3>
      <div className="content">
        <img src={drone} alt="Micro Drone Flight Control" />
        <div className="desc">
          <p>
            IoT (Internet of Things) themed project built on the Arduino
            platform
          </p>
          <p>
            This project modifies the Hubsan X4 micro drone so that it is able
            to be controlled with an android device and its accelerometer,
            instead of the default shipped controller.
          </p>
        </div>
      </div>
    </div>
    <div className="item">
      <h3>EatXpress</h3>
      <div className="content">
        <img src={eatxpress} alt="EatXpress" />
        <div className="desc">
          <p>
            An android application designed to handle orders for a restaurant.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioPage;
