import React from 'react';

import './hero-menu.scss';

import MenuItem from '../MenuItem/menu-item';

export default class HeroMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      menuItems: [
        {
          title: "Makeup",
          size: "small",
          slug: "makeup",
          id: 0,
        },
        {
          title: "Wigs",
          size: "small",
          slug: "wigs",
          id: 1,
        },
        {
          title: "Costumes",
          size: "small",
          slug: "costumes",
          id: 2,
        },
        {
          title: "High Heels",
          size: "large",
          slug: "high-heels",
          id: 3,
        },
        {
          title: "Jewelry",
          size: "large",
          slug: "jewelry",
          id: 4,
        },
      ],
    };
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