import React from 'react';

import './hero-menu.scss';

import MenuItem from '../MenuItem/menu-item';

import DATA from './hero-menu-data.js';

export default class HeroMenu extends React.Component {
  constructor() {
    super();
    
    this.state = { menuItems: DATA };
  }

  render() {
    return (
      <div className="hero-menu">
        {
          this.state.menuItems.map(({id, ...menuItemProps}) =>
            <MenuItem
              key={id}
              {...menuItemProps}
            />
          )
        }
      </div>
    )
  }
}