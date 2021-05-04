import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({title, size, slug, match}) => (
  <Link className={`menu-item menu-item--${slug} menu-item--${size}`} to={`${match.url}shop/${slug}`}>
    <div className="menu-item__info">
      <h2 className="menu-item__header">{title}</h2>
      <p className="menu-item__subheader">Browse</p>
    </div>
  </Link>
);

export default withRouter(MenuItem);