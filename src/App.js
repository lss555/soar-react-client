import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/Sign-In'
import Faq from './components/Faq/Faq.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sign-in' component={SignIn} exact />
        <Route path='/faq' component={Faq} exact />
      </Switch>
    </Router>
  );
}

export default App;
