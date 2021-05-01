import React from 'react';

import './menu-item.scss';

const MenuItem = ({title, size, slug}) => (
  <a className={`menu-item menu-item--${slug} menu-item--${size}`} href={`/${slug}`}>
    <div className="menu-item__info">
      <h2 className="menu-item__header">{title}</h2>
      <p className="menu-item__subheader">Browse</p>
    </div>
  </a>
);

export default MenuItem;