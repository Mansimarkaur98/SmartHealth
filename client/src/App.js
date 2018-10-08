import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Landing from './components/Landing';
import Home from './components/home';

import './styles/styles.css';
import ButtonAppBar from './components/appBar';

class App extends Component {
  render() {
    return (      
      <div>
        <BrowserRouter>
          <div>
          <ButtonAppBar/>
            <Route exact path="/" component= {Landing}/>
            <Route exact path="/register" component= {Register}/>
            <Route exact path="/login" component= {Login}/>
            <Route exact path="/home" component= {Home}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// this is the main page of our app...