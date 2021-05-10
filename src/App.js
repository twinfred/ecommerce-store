import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import A11yRouteAnnoucer from './Components/A11yRouteAnnouncer/a11y-route-announcer';
import Header from './Components/Header/header';
import Homepage from './Pages/Homepage/homepage';
import ShopPage from './Pages/Shop/shop';
import SignInSignUpPage from './Pages/SignInSignUp/sign-in-sign-up';

function App() {
  return (
    <>
      <A11yRouteAnnoucer />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </main>
    </>
  );
}

export default App;
