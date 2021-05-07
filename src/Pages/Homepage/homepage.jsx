import React, {useEffect} from 'react';

import './homepage.scss';

import HeroMenu from '../../Components/HeroMenu/hero-menu';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Drag Queen Warehouse';
  }, []);

  return (
    <div className="homepage">
      <HeroMenu/>
    </div>
  );
};

export default Homepage;