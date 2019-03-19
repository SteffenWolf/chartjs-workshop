import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import StringDemos from './components/ChartDemos/StringDemo/StringDemos';
import APIDemo from './components/ChartDemos/APIDemo/APIDemo';
import LiveDemo from './components/ChartDemos/LiveDemo/LiveDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={StringDemos}/>
          <Route path='/async' component={APIDemo}/>
          <Route path='/static' component={LiveDemo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
