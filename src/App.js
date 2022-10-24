import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Faq from './pages/Faq.js';
import ServiceInfo from './pages/Service.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cq' component={Faq} exact />
        <Route path='/service' component={ServiceInfo} exact />
      </Switch>
    </Router>
  );
}

export default App;
