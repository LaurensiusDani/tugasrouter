import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'./about-us'} component={About} />
        <Route exact path={'./contact-us'} component={Contact} />
      </Switch>
    )
  }
}


export default App;
