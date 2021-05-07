import {useState} from 'react';

import './hero-menu.scss';

import MenuItem from '../MenuItem/menu-item';

import DATA from './hero-menu-data.js';

export default function HeroMenu() {
  const [menuItems, setMenuItems] = useState(DATA);

  return(
    <div className="hero-menu">
    {
      menuItems.map(({id, ...menuItemProps}) =>
        <MenuItem
          key={id}
          {...menuItemProps}
        />
      )
    }
  </div>
  );
}