import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInSignUpPage from './pages/signin-signup/signin-signup';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
