import React from 'react';

import './homepage.scss';

const Homepage = () => (
  <div className="homepage">
    <div className="hero-menu">
      <a className="graphic-menu-item" href>
        <div className="graphic-menu-item-content">
          <h2 className="header-2">Makeup</h2>
          <span className="suplementary-info">Browse</span>
        </div>
      </a>
      <a className="graphic-menu-item" href>
        <div className="graphic-menu-item-content">
          <h2 className="header-2">Wigs</h2>
          <span className="suplementary-info">Browse</span>
        </div>
      </a>
      <a className="graphic-menu-item" href>
        <div className="graphic-menu-item-content">
          <h2 className="header-2">Accessories</h2>
          <span className="suplementary-info">Browse</span>
        </div>
      </a>
      <a className="graphic-menu-item" href>
        <div className="graphic-menu-item-content">
          <h2 className="header-2">Heels</h2>
          <span className="suplementary-info">Browse</span>
        </div>
      </a>
      <a className="graphic-menu-item" href>
        <div className="graphic-menu-item-content">
          <h2 className="header-2">Jewelry</h2>
          <span className="suplementary-info">Browse</span>
        </div>
      </a>
    </div>
  </div>
);

export default Homepage;