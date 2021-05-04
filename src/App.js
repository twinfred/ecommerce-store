import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Homepage from './Pages/Homepage/homepage';
import ShopPage from './Pages/Shop/shop';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        {/* <Route path="/shop/:categoryId" component={CategoryPage} /> */}
      </Switch>
    </>
  );
}

export default App;
