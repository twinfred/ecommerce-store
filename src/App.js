import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import Homepage from './Pages/homepage';

const CategoryPage = (props) => {
  console.log(props);
  let categoryId = props.match.params.categoryId;
  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1>Category Page {categoryId}</h1>
    </div>
  )
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/:categoryId" component={CategoryPage} />
      </Switch>
    </>
  );
}

export default App;
