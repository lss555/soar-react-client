import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Faq from './pages/Faq.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cq' component={Faq} exact />
      </Switch>
    </Router>
  );
}

export default App;
